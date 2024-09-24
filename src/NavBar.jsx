import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SCSS/NavBar.scss';
import userThumbnail from './images/9545823.png';

const NavBar = ({ onSearch }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        // 세션 정보 가져오기
        const fetchSession = async () => {
            const accessToken = localStorage.getItem('access_token');
            if (!accessToken) {
                setUser(null);
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_SUPABASE_ANON_URL}/auth/v1/user`, {
                    method: 'GET',
                    headers: {
                        'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('세션 정보를 가져오는 데 실패했습니다:', error);
                setUser(null);
            }
        };

        fetchSession();

        // 인증 상태 변경 리스너 등록
        const handleAuthStateChange = async () => {
            await fetchSession();
        };

        document.addEventListener('authStateChange', handleAuthStateChange);
        return () => {
            document.removeEventListener('authStateChange', handleAuthStateChange);
        };
    }, []);

    useEffect(() => {
        // 외부 클릭 시 드롭다운 메뉴 닫기
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSignupClick = () => {
        navigate('/signup');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SUPABASE_ANON_URL}/auth/v1/logout`, {
                method: 'POST',
                headers: {
                    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
            });

            if (response.ok) {
                localStorage.removeItem('access_token');
                setUser(null);
                navigate('/');
            } else {
                const { message } = await response.json();
                alert('로그아웃에 실패했습니다: ' + message);
            }
        } catch (error) {
            alert('로그아웃에 실패했습니다: ' + error.message);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const handleThumbnailClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleDropdownItemClick = (path) => {
        navigate(path);
        setDropdownVisible(false);
    };

    return (
        <nav className="navbar">
            <div className="logo" onClick={() => navigate('/')}>Movie</div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="영화 검색..."
                className="search-input"
            />
            <div className="auth-buttons">
                {user ? (
                    <div className="user-menu" ref={dropdownRef}>
                        <img
                            src={userThumbnail}  // import한 이미지 사용
                            alt="User Thumbnail"
                            className="user-thumbnail"
                            onClick={handleThumbnailClick}
                        />
                        {dropdownVisible && (
                            <div className="dropdown-menu">
                                <button className="button" onClick={() => handleDropdownItemClick('/mypage')}>마이 페이지</button>
                                <button className="button" onClick={handleLogoutClick}>로그아웃</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <button className="button" onClick={handleSignupClick}>회원가입</button>
                        <button className="button" onClick={handleLoginClick}>로그인</button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
