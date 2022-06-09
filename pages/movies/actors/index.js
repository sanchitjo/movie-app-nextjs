import axios from "axios"

import PeopleList from "../../../components/PeopleList";



const actors = ({ actor }) => {

  if (actor) {
    return (
      <PeopleList actor={actor.results} />
    )
  }

}


export const getServerSideProps = async () => {


  const { data: actor } = await axios.get(
    `
    https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&language=en-US`
  );
  console.log(actor)
  return {
    props: {
      actor,
    },
  };
};

export default actors