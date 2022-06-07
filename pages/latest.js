import axios from "axios"
import MovieList from "../components/MovieList";



const toprated = ({ movies }) => {

  if (movies) {
    return (

      <MovieList movies={movies.results} />


    )
  }

}


export const getServerSideProps = async () => {


  const { data: movies } = await axios.get(
    `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  console.log(movies)
  return {
    props: {
      movies,
    },
  };
};

export default toprated