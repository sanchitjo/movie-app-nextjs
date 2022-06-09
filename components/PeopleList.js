import PeopleItem from './PeopleItem'
import { Container } from './styles/CardsStyle'
    
const PeopleList = ({ actor }) => {
    console.log('actor', actor)
    return (
        <>
            <Container>

                {
                    actor?.map((act) => {
                        console.log(act)
                        return (
                            <PeopleItem key={act.id} act={act} />
                        )
                    })
                }
            </Container>
        </>
    )
}
  

export default PeopleList