import axios from "axios"
import MovieList from "../../components/MovieList";



const upcoming = ({ movies }) => {
  return (
    
      <MovieList movies={movies.results} />
    
  )
}


export const getServerSideProps = async () => {
  

  const { data: movies } = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  return {
    props: {
      movies,
    },
  };
};

export default upcoming