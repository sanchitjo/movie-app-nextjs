import Pagination from './Pagination'
import PeopleItem from './PeopleItem'
import { CardWrapper, Container } from './styles/CardsStyle'

const PeopleList = ({ actor }) => {
    // console.log('actor', actor)
    return (
        <>
        <CardWrapper>
            <Container>

                {
                    actor.results?.map((act) => {
                        console.log(act)
                        return (
                            <PeopleItem key={act.id} act={act} />
                        )
                    })
                }
                
            </Container>
            <Pagination content={actor} />
            </CardWrapper>
        </>
    )
}


export default PeopleList