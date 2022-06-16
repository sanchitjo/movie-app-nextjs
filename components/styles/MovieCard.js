import styled from 'styled-components';

export const MovieCard = styled.div`
  width: 250px;
  height: 450px;
  background-color: #faf9f6;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  img {
    width: 100%;
    height: 350px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    margin-bottom: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;