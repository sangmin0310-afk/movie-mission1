import React from 'react';

// 영화 카드의 제목, 포스터 이미지, 평점 및 클릭 이벤트를 props로 받음
const MovieCard = ({ title, posterPath, voteAverage, onClick }) => {
    // 이미지의 기본 URL 
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    
    return (
        // 카드 컨테이너 div 클릭 시 onClick 함수가 호출됨
        <div style={styles.card} onClick={onClick}>
            {/* 이미지 URL을 설정하고, alt 속성으로 대체 텍스트를 제공 */}
            <img
                src={`${imageBaseUrl}${posterPath}`}
                alt={title}
                style={styles.poster}
            />
            {/* 영화 제목을 표시하는 h2 태그 */}
            <h2 style={styles.title}>{title}</h2>
            {/* 평점을 표시하는 p 태그 */}
            <p style={styles.rating}>평점: {voteAverage}</p>
        </div>
    );
};

const styles = {
    // 카드 컨테이너 스타일
    card: {
        border: '1px solid #ddd',  // 카드 외곽선
        borderRadius: '8px',  // 카드 모서리를 둥글게
        overflow: 'hidden',  // 콘텐츠가 카드 밖으로 넘치지 않도록 설정
        margin: '10px',  // 카드 외부 여백
        padding: '10px',  // 카드 내부 여백
        width: '200px',  // 카드 너비
        textAlign: 'center',  // 텍스트를 가운데 정렬
        cursor: 'pointer'  // 클릭 가능하게 보이도록 커서 스타일 설정
    },

    // 포스터 이미지 스타일
    poster: {
        width: '100%',  // 이미지의 너비를 카드 너비에 맞춤
        borderRadius: '4px'  // 이미지의 모서리를 약간 둥글게 설정
    },

    // 영화 제목 스타일
    title: {
        fontSize: '16px',  // 글자 크기
        fontWeight: 'bold'  // 굵은 글씨체
    },

    // 평점 텍스트 스타일
    rating: {
        color: '#555'  // 평점 텍스트 색상 (어두운 회색)
    }
};


export default MovieCard;
