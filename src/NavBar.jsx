import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const NavBar = () => {
    // 페이지 전환을 위한 navigate 함수
    const navigate = useNavigate(); 

    // 회원가입 버튼 클릭 핸들러
    const handleSignupClick = () => {
        navigate('/signup'); // 회원가입 페이지로 이동
    };

    // 로그인 버튼 클릭 핸들러
    const handleLoginClick = () => {
        navigate('/login'); // 로그인 페이지로 이동
    };

    return (
        <nav style={navbarStyle}>
            {/* 로고를 표시하는 div */}
            <div style={logoStyle}>Movie</div>
            <div style={authButtonsStyle}>
                {/* 회원가입 버튼 */}
                <button 
                    style={buttonStyle} 
                    onClick={handleSignupClick} 
                >
                    회원가입
                </button>
                {/* 로그인 버튼 */}
                <button 
                    style={buttonStyle} 
                    onClick={handleLoginClick} 
                >
                    로그인
                </button>
            </div>
        </nav>
    );
};

const navbarStyle = {
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: '1rem',
    backgroundColor: '#000000', 
    borderBottom: '1px solid #dee2e6', 
};

// 로고 스타일 정의
const logoStyle = {
    fontSize: '1.5rem', 
    fontWeight: 'bold', 
    color: 'white', 
};

// 인증 버튼 컨테이너 스타일 정의
const authButtonsStyle = {
    display: 'flex', 
    gap: '0.5rem', 
};

// 버튼 기본 스타일 정의
const buttonStyle = {
    padding: '0.5rem 1rem', 
    border: 'none',
    borderRadius: '0.25rem',
    backgroundColor: '#007000', 
    color: 'white', 
    cursor: 'pointer', 
};

export default NavBar;
