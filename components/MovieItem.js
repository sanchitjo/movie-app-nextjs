import { MovieImg } from "./styles/CardsStyle";

const MovieItem = ({ movie }) => {
    
    return (
        <>
        
        <MovieImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie-img'/>
        <h4>{movie?.title}</h4>
        
        </>
    );
};

export default MovieItem;