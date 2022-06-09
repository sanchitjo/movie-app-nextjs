import axios from 'axios';
import MovieInfo from '../../../components/MovieInfo';



const movie = ({ movieData }) => {
    
    return (
      <MovieInfo
        movieData={movieData}
      />
    );
  };
  
  export const getServerSideProps = async (context) => {
    const { data: movieData } = await axios.get(
      `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${process.env.API_KEY}&language=en-US`
    );
  
    return {
        props: {
          movieData
        },
      };
    };
    
    export default movie;