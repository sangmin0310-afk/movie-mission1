import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MovieCard from './MovieCard'; 
import movieListData from './data/movieListData.json'; 

// 여러 영화 카드 목록을 렌더링
const MovieList = () => {
    // 초기값은 빈 배열.
    const [movies, setMovies] = useState([]);
    
    // useNavigate 훅을 사용해 페이지 이동을 위한 navigate 함수
    const navigate = useNavigate();

    // 컴포넌트가 마운트될 때 실행되는 useEffect 훅
    useEffect(() => {
        // 더미 데이터에서 영화 목록을 가져와 movies 상태에 설정
        setMovies(movieListData.results);
    }, []); // 빈 배열을 의존성으로 사용하여, 컴포넌트가 처음 렌더링될 때만 실행

    // 영화 카드를 클릭할 때 호출되는 함수 영화의 ID를 기반으로 상세 페이지로 이동
    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`); // 영화의 ID를 포함한 경로로 이동
    };

    // 영화 목록을 렌더링하는 JSX 반환
    return (
        <div style={styles.container}>
            {/* 페이지 제목 */}
            <h1 style={styles.heading}>Movie List</h1>
            {/* 영화 카드 목록 */}
            <div style={styles.movieList}>
                {movies.map(movie => (
                    <MovieCard
                        key={movie.id} // 각 영화 카드에 고유한 키 설정
                        title={movie.title} // 영화 제목
                        posterPath={movie.poster_path} // 영화 포스터 경로
                        voteAverage={movie.vote_average} // 영화 평점
                        onClick={() => handleMovieClick(movie.id)} // 클릭 시 handleMovieClick 호출
                    />
                ))}
            </div>
        </div>
    );
};

// CSS 속성을 객체로 표현
const styles = {
    container: {
        display: 'flex', // Flexbox 레이아웃 사용
        flexDirection: 'column', // 세로 방향으로 정렬
        alignItems: 'center', // 자식 요소들을 가운데 정렬
        justifyContent: 'center', // 수직 방향으로 가운데 정렬
        minHeight: '100vh', // 최소 높이를 화면 높이로 설정
        padding: '20px', // 내부 여백
        fontFamily: 'Arial, sans-serif' // 폰트 설정
    },
    heading: {
        marginBottom: '20px' // 아래쪽 여백 설정
    },
    movieList: {
        display: 'flex', // Flexbox 레이아웃 사용
        flexWrap: 'wrap', // 자식 요소들이 줄 바꿈되도록 설정
        justifyContent: 'center' // 자식 요소들을 가로 방향으로 가운데 정렬
    }
};

export default MovieList;
