import { IMAGE_URL, EMPTY_PERSON_URL } from '../config';
import { ActorImg, Container, InfoWrapper } from './styles/PeopleInfoStyle';


const PeopleInfo = ({ person }) => {
    return (

        <>
            <Container>
                <ActorImg
                    src={
                        person?.profile_path
                            ? `${IMAGE_URL}${person?.profile_path}`
                            : `${EMPTY_PERSON_URL}`
                    }
                    alt={person?.name}
                />
                <InfoWrapper>
                <h2>{person?.name}</h2>
                <p>Place of Birth - <strong>{person?.place_of_birth}</strong></p>
                <p>{person?.biography}</p>
                </InfoWrapper>
            </Container>
        </>

    )
}
export default PeopleInfo