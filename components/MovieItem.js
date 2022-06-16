import { MovieImg } from "./styles/CardsStyle";
import Link from 'next/link'
import { MovieCard } from "./styles/MovieCard";


const MovieItem = ({ movie }) => {

    return (
        <>
            <MovieCard>
                <Link href={`/movies/${movie.id}`}>
                    <MovieImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie-img' />
                </Link>
                <h3>{movie?.title}</h3>
            </MovieCard>
        </>
    );
};

export default MovieItem;