import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
    return (
        <div>
            {movies.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
        </div>
    )
}

export default MovieList;