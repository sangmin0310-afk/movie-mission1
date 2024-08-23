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

{/*
1. 컴포넌트 정의 및 Props 전달
const MovieCard = ({ title, posterPath, voteAverage, onClick }) => {
MovieCard는 함수형 컴포넌트입니다.
이 컴포넌트는 title, posterPath, voteAverage, onClick이라는 네 가지 props를 받습니다.
title: 영화 제목.
posterPath: 영화 포스터 이미지의 경로.
voteAverage: 영화의 평점.
onClick: 카드를 클릭했을 때 실행할 함수.

2. 이미지 기본 URL 설정

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
imageBaseUrl은 영화 포스터 이미지를 가져오기 위한 기본 URL입니다.
TMDb (The Movie Database) API에서 제공하는 이미지 URL의 기본 경로로 사용됩니다.

3. 카드 UI 렌더링

return (
    <div style={styles.card} onClick={onClick}>
        <img
            src={`${imageBaseUrl}${posterPath}`}
            alt={title}
            style={styles.poster}
        />
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.rating}>평점: {voteAverage}</p>
    </div>
);
div 요소는 카드 컨테이너로 사용됩니다. 
이 컨테이너는 styles.card 스타일 객체로 스타일링되고, 
onClick 이벤트가 연결됩니다. 
사용자가 카드를 클릭하면 onClick 함수가 호출됩니다.

img 요소는 영화 포스터를 표시합니다.

src 속성: imageBaseUrl과 posterPath를 결합하여 최종 이미지 URL을 생성합니다.
alt 속성: 이미지가 로드되지 않을 때 표시할 대체 텍스트로 영화 제목을 사용합니다.
style: styles.poster 스타일 객체를 적용합니다.
h2 요소는 영화 제목을 표시합니다.

style: styles.title 스타일 객체를 적용합니다.
p 요소는 영화 평점을 표시합니다.

style: styles.rating 스타일 객체를 적용합니다.
    
*/}