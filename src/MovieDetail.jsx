import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SCSS/MovieDetail.scss'; // SCSS 파일 import

const MovieDetail = () => {
    const { id } = useParams(); 
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}` 
                    }
                };

                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko`, options); 

                if (!response.ok) {
                    throw new Error('응답오류');
                }

                const data = await response.json();
                setMovie(data); 
            } catch (error) {
                setError(error.message); 
            } finally {
                setLoading(false); 
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (!movie) {
        return <div>영화 정보를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="container">
            <div className="posterContainer">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className="poster" 
                />
            </div>
            <div className="detailsContainer">
                <h1 className="title">{movie.title}</h1> 
                <p className="rating">평점: {movie.vote_average.toFixed(1)}</p> 
                <p className="genres">
                    장르: {movie.genres.map(genre => genre.name).join(', ')} 
                </p>
                <p className="overview">{movie.overview}</p> 
            </div>
        </div>
    );
};

export default MovieDetail;
