// App.jsx
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import NavBar from './NavBar';
import Signup from './Signup';
import Login from './Login';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <NavBar onSearch={setSearchTerm} />
            <Routes>
                <Route path="/" element={<MovieList searchTerm={searchTerm} />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
};

export default App;
