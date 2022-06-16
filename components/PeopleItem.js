import { MovieImg } from "./styles/CardsStyle"
import Link from 'next/link'
import { EMPTY_PERSON_URL, IMAGE_URL } from '../config';
import { MovieCard } from "./styles/MovieCard";


const PeopleItem = ({ act }) => {
  return (
    <>
      <MovieCard>
        <Link href={`/actors/${act.id}`}>
          <MovieImg 
          src={
            act?.profile_path
              ? `${IMAGE_URL}${act?.profile_path}`
              : `${EMPTY_PERSON_URL}`
          }
            alt='actor-img' />
        </Link>
        <h4>{act?.name}</h4>
      </MovieCard>
    </>
  )
}

export default PeopleItem