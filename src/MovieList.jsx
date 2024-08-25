import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MovieCard from './MovieCard'; 
import useDebounce from './useDebounce';
import './SCSS/MovieList.scss';

const MovieList = ({ searchTerm }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);

            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`
                    }
                };

                let url = 'https://api.themoviedb.org/3/movie/popular?language=ko&page=1';
                if (debouncedSearchTerm) {
                    url = `https://api.themoviedb.org/3/search/movie?query=${debouncedSearchTerm}&language=ko&page=1`;
                }

                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error('응답오류');
                }

                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [debouncedSearchTerm]);

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    if (loading) {
        return <div className="loading">로딩중...</div>;
    }

    if (error) {
        return <div className="error">오류: {error.message}</div>;
    }

    return (
        <div className="movie-list">
            <h1 className="heading">Movie List</h1>
            <div className="movie-list-container">
                {movies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        posterPath={movie.poster_path}
                        voteAverage={movie.vote_average}
                        onClick={() => handleMovieClick(movie.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieList;