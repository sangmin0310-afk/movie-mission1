import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import './SCSS/NavBar.scss';

const NavBar = ({ onSearch }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSignupClick = () => {
        navigate('/signup');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <nav className="navbar">
            <div className="logo">Movie</div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="영화 검색..."
                className="search-input"
            />
            <div className="auth-buttons">
                <button className="button" onClick={handleSignupClick}>회원가입</button>
                <button className="button" onClick={handleLoginClick}>로그인</button>
            </div>
        </nav>
    );
};

NavBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default NavBar;