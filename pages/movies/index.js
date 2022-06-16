import axios from 'axios';
import Meta from '../../components/Meta';
import MovieList from '../../components/MovieList';


const popular = ({ movies }) => {

  // const { results } = popularMovies;

  return (
    <>
      <Meta />
      <MovieList movies={movies} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;

  const { data: movies } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  return {
    props: {
      movies,
    },
  };
};

export default popular;