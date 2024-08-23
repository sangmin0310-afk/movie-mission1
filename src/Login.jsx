import React from 'react';

const Login = () => {
    return (
        <div style={containerStyle}>
            {/* 로그인 폼 */}
            <form style={formStyle}>
                {/* 이메일 또는 아이디 입력 필드 */}
                <input type="text" placeholder="이메일 또는 아이디" style={inputStyle} required />
                {/* 비밀번호 입력 필드 */}
                <input type="password" placeholder="비밀번호" style={inputStyle} required />
                {/* 로그인 버튼 */}
                <button 
                    type="submit" 
                    style={buttonStyle} 
                >
                    로그인
                </button>
            </form>
        </div>
    );
};

// 전체 컨테이너 스타일 정의
const containerStyle = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh', 
    width: '100vw', 
    backgroundColor: '#00080', 
    padding: '0', 
    margin: 0, 
};

// 폼 스타일 정의
const formStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    maxWidth: '400px', 
    width: '100%', 
    padding: '2rem', 
    borderRadius: '0.5rem', 
    backgroundColor: 'white', 
};

// 입력 필드 스타일 정의
const inputStyle = {
    marginBottom: '1rem', 
    padding: '0.75rem', 
    border: '1px solid #dee2e6', 
    borderRadius: '0.25rem',
    fontSize: '1rem', 
};

// 버튼 스타일 정의
const buttonStyle = {
    padding: '0.75rem',
    border: 'none',
    borderRadius: '0.25rem', 
    backgroundColor: '#00080', 
    color: 'white', 
    cursor: 'pointer', 
    fontSize: '1.25rem', 
    marginTop: '1rem', 
};

export default Login;