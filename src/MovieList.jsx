import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MovieCard from './MovieCard'; 

const MovieList = () => {
    // 상태 변수 정의
    const [movies, setMovies] = useState([]); // 영화 목록
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 오류 상태

    const navigate = useNavigate(); // 페이지 전환을 위한 navigate 함수

    // 컴포넌트가 마운트될 때 영화 데이터를 가져오는 useEffect 훅
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // TMDb API 호출을 위한 옵션 설정
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`
                    }
                };

                // 영화 데이터를 가져오는 API 호출
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=ko&page=1', options);
                
                // 응답이 정상적이지 않으면 오류를 발생시킴
                if (!response.ok) {
                    throw new Error('응답오류');
                }

                // 응답 데이터를 JSON으로 변환
                const data = await response.json();
                setMovies(data.results); // 영화 목록 상태 업데이트
            } catch (error) {
                setError(error); // 오류 상태 업데이트
            } finally {
                setLoading(false); // 로딩 상태를 false로 설정
            }
        };

        fetchMovies(); // 영화 데이터 가져오기 함수 호출
    }, []); // 빈 배열을 의존성으로 설정하여 컴포넌트가 처음 마운트될 때만 실행

    // 영화 카드 클릭 시 상세 페이지로 이동하는 핸들러
    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`); // movieId에 따라 URL을 변경하여 상세 페이지로 이동
    };

    // 로딩 중일 때 표시할 컴포넌트
    if (loading) {
        return <div>로딩중...</div>;
    }

    // 오류 발생 시 표시할 컴포넌트
    if (error) {
        return <div>오류: {error.message}</div>;
    }

    // 영화 목록과 스타일을 포함한 반환 JSX
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Movie List</h1>
            <div style={styles.movieList}>
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

// 스타일 정의
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    heading: {
        marginBottom: '20px'
    },
    movieList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
};

export default MovieList;
