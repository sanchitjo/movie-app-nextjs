import Link from "next/link";
import { CardWrapper, MovieImg, Container } from "./styles/CardsStyle";

const Cards = ({ movies }) => {


  return (
    <CardWrapper>
      <h1>Popular</h1>
      {movies.map((movie) => {
        return (
          <Link href='/movie/${movie.id}' key={movie.id}>
            
            <Container >
              <MovieImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <h3>{movie.title}</h3>
              <h4>Rating: {movie.vote_average}</h4>
              <p>Release Date: {movie.release_date}</p>
            </Container>
            
          </Link>
        )
      })}
    </CardWrapper>
  )
}

export default Cards

