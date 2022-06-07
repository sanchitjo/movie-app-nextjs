import styled from 'styled-components'

export const NavWrapper = styled.nav`
color: rgba(0, 0, 0, 0.595);
background-color: lightblue;
display: flex;
flex-direction: row;
margin-top: 0;
height: 60px;
border-radius: 5px;

ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;        
}
ul li {
    margin: 20px;
    &:hover {
    color: black;
    }
}
ul li h3 {
    margin-left: 0;
}
`

export const SearchBar = styled.input`
height: 35px;
margin-top: 13px;
padding: 3px;
border: none;
border-radius: 5px;
margin-left: 30px;
width: 200px;
outline: none;
`