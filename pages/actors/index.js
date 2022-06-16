import axios from "axios"
import Meta from "../../components/Meta";
import PeopleList from '../../components/PeopleList'




const actors = ({ actor }) => {

  if (actor) {
    return (
      <>
      <Meta />
      <PeopleList actor={actor} />
      </>
    )
  }

}


export const getServerSideProps = async ({query}) => {
  const page = query.page || 1;

  const { data: actor } = await axios.get(
    `
    https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
  );
  console.log(actor)
  
  return {
    props: {
      actor,
    },
  };
};

export default actors