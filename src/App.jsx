import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import MovieList from './MovieList'; 
import MovieDetail from './MovieDetail'; 
import NavBar from './NavBar';
import Signup from './Signup';
import Login from './Login'; 

const App = () => (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} /> 
        </Routes>
    </div>
);

export default App;
