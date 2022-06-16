import styled from "styled-components";

export const CardWrapper = styled.div`
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`
export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 40px;
justify-content: center;
align-items: center;
padding: 20px;
text-align: center;
width: 1200px;
margin-left: 40px;
height: auto;

@media only screen and (max-width: 450px) {
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-gap: 10px;
grid-row-gap: 20px;
margin-top: 50px;
}

@media only screen and (max-width:800px) and (min-width:451px) {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 20px;

}
`

export const MovieImg = styled.img`
margin: 0 auto;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;
/* height: 30px;
width: 240px; */

`
