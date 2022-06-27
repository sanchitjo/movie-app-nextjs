import styled from "styled-components";

export const MovieInfoStyles = styled.div`
display: flex;
flex-direction: column;
background: whitesmoke;
color: black;
padding: 3em;
width: 95vw;

  .movie-data {
    display: flex;
    flex-direction: row;
  }
  .movie-content {
    margin-left: 20px;
  }
  
  .title-content img {
    width: 300px;
    height: 450px;
    border-radius: 5px;
  }
  .recMovie-container,
  .top-cast {
    display: flex;
    overflow-y: scroll;
  }
  .recMovie-item,
  .actors {
    background: white;
    border-radius: 5px;
    color: black;
    margin-right: 1em;
    padding: 1em;
  }
  .recMovie-item,
  .actors:hover {
    cursor: pointer;
  }
  .recMovie-item img,
  .actors img {
    width: 150px;
    height: 250px;
  }
  .cast {
    margin-bottom: 2em;
  }
  .full-cast:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media only screen and (max-width: 900px) {
    .title-content {
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: 450px) {
    .movie-data {
    display: flex;
    flex-direction: column;
  }
  }
`;

export const MovieImage = styled.img`
    height: 500px;
    width: 400px;

    @media only screen and (max-width: 450px) {
      height: 350px;
    width: 250px;
  }
`