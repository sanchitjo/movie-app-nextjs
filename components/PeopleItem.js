import { MovieImg } from "./styles/CardsStyle"


const PeopleItem = ({act}) => {
  return (
    <>
        
        <MovieImg src={`https://image.tmdb.org/t/p/w500/${act.profile_path}`} alt='actor-img'/>
        <h4>{act?.name}</h4>
        
        </>
  )
}

export default PeopleItem