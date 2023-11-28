import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TrailerMovie = ({ movies }) => {
    const { title } = useParams();
    const navMov = useNavigate();

    const movie = movies.find((movie) => movie.title === title);

    if (!movie) {
    // Handle movie not found
    return <div>Movie not found</div>;
    }

    const handleGoBack = () => {
    // Navigate back to the home page
    navMov('/');
    };

    return (
    <div style={{marginTop: "20px", marginBottom: "20px", gap: "10px", marginLeft: "20px"}}>
        <h2>{movie.title} Trailer</h2>
        <iframe
            title="trailer"
            width="700"
            height="400"
            src={movie.trailer}
            frameborder="0"
        ></iframe>
        <p><b>{movie.description}</b></p>
        <button style={{borderRadius: "5px"}} onClick={handleGoBack}>Go Back</button>
    </div>
    );
};

export default TrailerMovie;