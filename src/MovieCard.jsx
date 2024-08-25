import React from 'react';
import './SCSS/MovieCard.scss';

const MovieCard = ({ title, posterPath, voteAverage, onClick, releaseDate }) => {
    const imagebaseUrl = posterPath
        ? `https://image.tmdb.org/t/p/w200${posterPath}`
        : 'https://via.placeholder.com/200x300?text=No+Image';

    return (
        <div className="movie-card" onClick={onClick}>
            <img className="poster" src={imagebaseUrl} alt={title} />
            <div className="info">
                <h3 className="title">{title}</h3>
                <p className="vote">{`평점: ${voteAverage}`}</p>
                {releaseDate && <p className="release-date">{`Release Date: ${releaseDate}`}</p>}
            </div>
        </div>
    );
};

export default MovieCard;
