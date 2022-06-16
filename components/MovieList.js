import MovieItem from './MovieItem'
import Pagination from './Pagination'
import { CardWrapper, Container } from './styles/CardsStyle'
import { MovieSearchStyle } from './styles/MovieSearchStyle'


const MovieList = ({ movies }) => {
    console.log('movies', movies)
    console.log(movies)
    return (
        <>
            <CardWrapper>
                {/* <MovieSearchStyle></MovieSearchStyle> */}
                <Container>
                    {
                        movies.results?.map((movie) => {
                            console.log(movies)
                            return (
                                <MovieItem key={movie.id} movie={movie} />
                            )
                        })
                    }
                </Container>
                <Pagination content={movies} />
            </CardWrapper>
        </>
    )
}

export default MovieList