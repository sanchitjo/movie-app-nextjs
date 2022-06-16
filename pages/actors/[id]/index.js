import axios from 'axios';
import Meta from '../../../components/Meta';
import PeopleInfo from '../../../components/PeopleInfo';


const personId = ({ person }) => {
  return (
      <>
      <Meta />
  <PeopleInfo person={person} />
  </>
  );
};

export const getServerSideProps = async (context) => {
  const { data: person } = await axios.get(
    `https://api.themoviedb.org/3/person/${context.params.id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  return {
    props: {
      person
    },
  };
};

export default personId;