import styled from "styled-components";

export const CardWrapper = styled.div`
/* background-color: lightblue; */
height: auto;
`
export const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
/* grid-auto-rows: 250px; */
row-gap: 10px;
justify-content: center;
align-items: center;
margin: auto; 
padding: 10px;
`

export const MovieImg = styled.img`
margin: 0 auto;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
height: 250px;
width: auto;
`
