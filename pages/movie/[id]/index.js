import axios from "axios"
import MovieDetails from "../../../components/MovieDetails";

const Movie = ({ movie }) => {
    console.log(movie)
    return (
        <MovieDetails movie={movie} />
    )
}

export default Movie

export const getServerSideProps = async (context) => {
    const { data: movie } = await axios.get(
      `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.API_KEY}&language=en-US`
    );

    return {
        props: {
            movie
        }
    }
} 

