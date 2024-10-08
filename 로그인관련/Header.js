import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import "../assets/style/header.scss";
import MainSearchBox from "./MainSearchBox";
import { supabase } from "../supabaseClient";

function Header() {
  const [searchBox, setSearchBox] = useState(false);
  const [mainSearchBoxStatus, setMainSearchBoxStatus] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    // 현재 세션 가져오기
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    };

    fetchSession();

    // 인증 상태 변경 구독 설정
    const { data: subscription } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    // 컴포넌트 언마운트 시 구독 해제
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null); // 로그아웃 후 상태 초기화
  };

  return (
    <header className="header">
      <div className="inner">
        <h1 className="logo">
          <Link to="/" className="logo">DVING</Link>
        </h1>
        <div className="pages">
          <Link to="/Bookmark" className="bookmark-btn icon-btn">내가 찜한 영화</Link>
          <button type="button" className="search-btn icon-btn" onClick={() => (setSearchBox(prev => true))}>검색</button>
          <button type="button" className="search-btn icon-btn" onClick={() => (setMainSearchBoxStatus(prev => true))}>검색</button>
          
          {
            user ? (
            <>
              <Link to="/Mypage" className="mypage-btn icon-btn">마이페이지</Link>
              <button className="login-btn join-btn btn" onClick={handleLogout}>로그아웃</button>
            </>
            ) : 
            (
              <>
                <Link to="/SignUp" className="sign-up-btn join-btn btn">회원가입</Link>
                <Link to="/Login" className="login-btn join-btn btn">로그인</Link>
              </>
            )
          }
        </div>
      </div>
      {
        searchBox ? <SearchBox setSearchBox={setSearchBox} /> : null
      }
      {
        mainSearchBoxStatus ? <MainSearchBox setMainSearchBoxStatus={setMainSearchBoxStatus} /> : null
      }
    </header>
  )
}

export default Header;