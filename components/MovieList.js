import Link from 'next/link'
import MovieItem from './MovieItem'
import { Container } from './styles/CardsStyle'


const MovieList = ({ movies }) => {
    console.log('movies', movies)
    return (
        <>
            <Container>
                {
                    movies?.map((movie) => {
                        console.log(movies)
                        return (
                            <MovieItem key={movie.id} movie={movie} />
                        )
                    })
                }
            </Container>
        </>
    )
}

export default MovieList