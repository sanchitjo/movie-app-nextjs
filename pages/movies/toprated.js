import axios from "axios"
import Meta from "../../components/Meta";
import MovieList from "../../components/MovieList";



const toprated = ({ movies }) => {
  return (
    <>
    <Meta />
      <MovieList movies={movies} />
      </>
  )
}


export const getServerSideProps = async ({query}) => {
  const page = query.page || 1;
  
  const { data: movies } = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );

  return {
    props: {
      movies,
    },
  };
};

export default toprated

// import axios from "axios"
// import MovieDetails from "../../../components/MovieDetails";

// const Movie = ({ movie }) => {
//     console.log(movie)
//     return (
//         <MovieDetails movie={movie} />
//     )
// }

// export default Movie

// export const getServerSideProps = async (context) => {
//     const { data: movie } = await axios.get(
//       `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.API_KEY}&language=en-US`
//     );

//     return {
//         props: {
//             movie
//         }
//     }
// } 

