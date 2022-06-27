import styled from 'styled-components'

export const Container = styled.div`
background-color: whitesmoke;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
border-radius: 10px;
box-shadow: 5px 5px 5px grey;
width: 1250px;

@media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin-top: 80px;
    margin-left: 10px;
}
`
export const ActorImg = styled.img`
height: 500px;
width: 350px;
padding: 20px;

@media only screen and (max-width: 450px) {
    height: 350px;
    width: 250px;
}
`

export const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
`