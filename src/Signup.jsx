import React from 'react';

const Signup = () => {
    return (
        <div style={containerStyle}>
            {/* 회원가입 폼 */}
            <form style={formStyle}>
                {/* 이름 입력 필드 */}
                <input type="text" placeholder="이름" style={inputStyle} required />
                {/* 이메일 입력 필드 */}
                <input type="email" placeholder="이메일" style={inputStyle} required />
                {/* 비밀번호 입력 필드 */}
                <input type="password" placeholder="비밀번호" style={inputStyle} required />
                {/* 비밀번호 확인 입력 필드 */}
                <input type="password" placeholder="비밀번호 확인" style={inputStyle} required />
                {/* 회원가입 버튼 */}
                <button 
                    type="submit" 
                    style={buttonStyle} 
                >
                    회원가입
                </button>
            </form>
        </div>
    );
};


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

const formStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    maxWidth: '500px', 
    width: '100%', 
    padding: '2.5rem', 
    borderRadius: '0.5rem', 
    backgroundColor: 'white', 
};

const inputStyle = {
    marginBottom: '1.5rem', 
    padding: '0.75rem', 
    border: '1px solid #dee2e6', 
    borderRadius: '0.25rem', 
    fontSize: '1rem', 
};

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

export default Signup;
