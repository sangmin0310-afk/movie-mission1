import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
    // URL 파라미터에서 영화 ID를 추출
    const { id } = useParams(); 
    
    // 상태 변수 정의
    const [movie, setMovie] = useState(null); // 영화 상세 정보
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(null); // 오류 상태

    // 영화 상세 정보를 가져오는 useEffect 훅
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                // TMDb API 호출을 위한 옵션 설정
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}` 
                    }
                };

                // 영화 상세 정보를 가져오는 API 호출
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ko`, options); 

                // 응답이 정상적이지 않으면 오류를 발생시킴
                if (!response.ok) {
                    throw new Error('응답오류');
                }

                // 응답 데이터를 JSON으로 변환
                const data = await response.json();
                setMovie(data); // 영화 상세 정보 상태 업데이트
            } catch (error) {
                setError(error.message); // 오류 상태 업데이트
            } finally {
                setLoading(false); // 로딩 상태를 false로 설정
            }
        };

        fetchMovieDetails(); // 영화 상세 정보를 가져오는 함수 호출
    }, [id]); // id가 변경될 때마다 이 useEffect 훅이 실행됨

    // 로딩 중일 때 표시할 컴포넌트
    if (loading) {
        return <div>로딩 중...</div>;
    }

    // 오류 발생 시 표시할 컴포넌트
    if (error) {
        return <div>오류: {error}</div>;
    }

    // 영화 정보가 없는 경우 표시할 컴포넌트
    if (!movie) {
        return <div>영화 정보를 찾을 수 없습니다.</div>;
    }

    // 영화 상세 정보를 포함한 반환 JSX
    return (
        <div style={styles.container}>
            {/* 포스터 이미지와 관련된 컨테이너 */}
            <div style={styles.posterContainer}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    style={styles.poster} 
                />
            </div>
            {/* 영화 상세 정보와 관련된 컨테이너 */}
            <div style={styles.detailsContainer}>
                <h1 style={styles.title}>{movie.title}</h1> 
                <p style={styles.rating}>평점: {movie.vote_average.toFixed(1)}</p> 
                <p style={styles.genres}>
                    장르: {movie.genres.map(genre => genre.name).join(', ')} 
                </p>
                <p style={styles.overview}>{movie.overview}</p> 
            </div>
        </div>
    );
};

// 스타일 정의
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#000000',
        color: '#ffffff' 
    },

    posterContainer: {
        flex: '1 1 300px',
        marginRight: '20px',
    },

    poster: {
        width: '100%',
        borderRadius: '8px',
    },

    detailsContainer: {
        flex: '2 1 600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    title: {
        fontSize: '2em',
        margin: '0 0 10px 0',
    },

    rating: {
        fontSize: '1.2em',
        margin: '0 0 10px 0',
    },

    genres: {
        fontSize: '1.2em',
        margin: '0 0 10px 0',
    },
    
    overview: {
        fontSize: '1em',
        lineHeight: '1.5',
    },
};

export default MovieDetail;
