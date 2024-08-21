import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import movieDetailData from './data/movieDetailData.json'; 

// 특정 영화의 상세 정보를 렌더링
const MovieDetail = () => {
    // useParams 훅을 사용해 URL에서 영화 ID
    const { id } = useParams();

    // 초기값은 null
    const [movie, setMovie] = useState(null);

    // 컴포넌트가 마운트되거나 id가 변경될 때마다 실행되는 useEffect 훅
    useEffect(() => {
        // 더미 데이터 설정 
        setMovie(movieDetailData);
    }, [id]); // id가 변경될 때마다 useEffect 재실행

    // 영화 데이터가 로드되지 않은 경우 로딩 메시지 표시
    if (!movie) {
        return <div>로딩 중...</div>;
    }

    // 영화 데이터를 렌더링하는 JSX 반환
    return (
        <div style={styles.container}>
            {/* 포스터를 보여주는 섹션 */}
            <div style={styles.posterContainer}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // 영화 포스터 이미지 URL
                    alt={movie.title} // 포스터의 대체 텍스트로 영화 제목 사용
                    style={styles.poster} // 포스터 이미지에 대한 스타일
                />
            </div>
            {/* 영화 세부 정보를 보여주는 섹션 */}
            <div style={styles.detailsContainer}>
                <h1 style={styles.title}>{movie.title}</h1> {/* 영화 제목 */}
                <p style={styles.rating}>평점: {movie.vote_average.toFixed(1)}</p> {/* 평점 */}
                <p style={styles.genres}>
                    장르: {movie.genres.map(genre => genre.name).join(', ')} {/* 장르 목록 */}
                </p>
                <p style={styles.overview}>{movie.overview}</p> {/* 영화 개요 */}
            </div>
        </div>
    );
};

// CSS 속성을 객체 형태로 작성
const styles = {
    container: {
        display: 'flex', // Flexbox를 사용해 레이아웃 설정
        flexDirection: 'row', // 가로 방향으로 정렬
        margin: '20px', // 외부 여백
        padding: '20px', // 내부 여백
        border: '1px solid #ddd', // 외곽선
        borderRadius: '8px', // 모서리를 둥글게
        backgroundColor: '#000000', // 배경색 (검은색)
    },

    posterContainer: {
        flex: '1 1 300px', // Flexbox 설정: 1단위 크기, 최소 크기 300px
        marginRight: '20px', // 오른쪽 여백
    },

    poster: {
        width: '100%', // 포스터 이미지의 너비를 부모 컨테이너에 맞춤
        borderRadius: '8px', // 이미지 모서리를 둥글게
    },

    detailsContainer: {
        flex: '2 1 600px', // Flexbox 설정: 2단위 크기, 최소 크기 600px
        display: 'flex', // Flexbox 사용
        flexDirection: 'column', // 세로 방향으로 정렬
        justifyContent: 'center', // 세로 가운데 정렬
    },

    title: {
        fontSize: '2em', // 제목 글자 크기
        margin: '0 0 10px 0', // 아래쪽 여백 10px
    },

    rating: {
        fontSize: '1.2em', // 평점 글자 크기
        margin: '0 0 10px 0', // 아래쪽 여백 10px
    },

    genres: {
        fontSize: '1.2em', // 장르 글자 크기
        margin: '0 0 10px 0', // 아래쪽 여백 10px
    },
    
    overview: {
        fontSize: '1em', // 개요 글자 크기
        lineHeight: '1.5', // 줄 간격
    },
};


export default MovieDetail;
