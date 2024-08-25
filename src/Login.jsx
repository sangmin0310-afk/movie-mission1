import React from 'react';
import './SCSS/Login.scss';

const Login = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <input type="text" placeholder="이메일 또는 아이디" className="login-input" required />
                <input type="password" placeholder="비밀번호" className="login-input" required />
                <button type="submit" className="login-button">로그인</button>
            </form>
        </div>
    );
};

export default Login;
