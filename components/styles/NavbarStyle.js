import styled from 'styled-components'

export const NavWrapper = styled.nav`
color: rgba(0, 0, 0, 0.595);
background-color: lightblue;
display: flex;
flex-direction: row;
margin-top: 0;
height: 60px;
border-radius: 5px;
width: 100%;

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

@media only screen and (max-width: 450px) {
    width: 100%;
    height: 80px;
    padding-left: 2px;
    flex-direction: column;
    ul {
        padding-left: 2px;
        margin-top: 0;
        
    }
    ul li {
    margin: 7px;
    margin-top: 0;
    
    }
    ul li h3 {
    margin-left: 0;
    
}
}
`


export const SearchBar = styled.input`
height: 35px;
margin-top: 13px;
padding: 3px;
border: none;
border-radius: 5px;
margin-left: 400px;
width: 200px;
outline: none;

@media only screen and (max-width: 450px) {
    height: 45px;
    margin-left: 100px;
    margin-top: 0;
    margin-right: 900px;
    background-color: black;
    color: white;
}
`