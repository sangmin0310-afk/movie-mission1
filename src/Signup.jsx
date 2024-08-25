import React from 'react';
import './SCSS/Signup.scss';

const Signup = () => {
    return (
        <div className="signup-container">
            <form className="signup-form">
                <input type="text" placeholder="이름" className="signup-input" required />
                <input type="email" placeholder="이메일" className="signup-input" required />
                <input type="password" placeholder="비밀번호" className="signup-input" required />
                <input type="password" placeholder="비밀번호 확인" className="signup-input" required />
                <button type="submit" className="signup-button">회원가입</button>
            </form>
        </div>
    );
};

export default Signup;
