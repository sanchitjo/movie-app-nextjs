import styled from 'styled-components';

export const PaginationStyles = styled.div`
  font-weight: bold;
  margin-top: 10px;
  .pagination {
    padding: 0;
    margin: 0;
  }
  .pagination li {
    list-style: none;
    display: inline-block;
    padding: 0 1rem 1rem;
  }
  
  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 450px) {
    .pagination {
    margin-right: 900px;
  }
  }
`;