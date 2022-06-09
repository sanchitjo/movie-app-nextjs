import { MovieImg } from "./styles/CardsStyle";
import Link from 'next/link'

const MovieItem = ({ movie }) => {
    
    return (
        <>
        <Link href={'/movies/${movie.id}'}>
        <MovieImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie-img'/>
        </Link>
        <h4>{movie?.title}</h4>
        </>
    );
};

export default MovieItem;