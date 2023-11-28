import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MovieCard = ({movie}) => {
    const navMov = useNavigate();

    const handleCardClick = () => {
        navMov(`/movies/${movie.title}`);
    }
    return (
        <div className="moviecard" onClick={handleCardClick}>
            <h1>{movie.title}</h1>
            <img src={movie.posterUrl} alt="movie" height={"400px"} width={"300px"}/>
            <h2>Genre: {movie.description}</h2>
            <p><b>Rating: {movie.rating}</b></p>
            <Link to={movie.trailer}><p>Movie Trailer</p></Link>
        </div>
    )
}

export default MovieCard;