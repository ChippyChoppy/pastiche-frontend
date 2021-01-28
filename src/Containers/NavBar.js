import React from 'react'
import styled from 'styled-components'
import PasticheHeader from './PasticheHeader.png'
// look into NavLink documentation for this
const NavBar = (props) => {
    return (
        <div>
            <Navigation>
                <Tab><NavLink>My Profile</NavLink></Tab>
                <Tab><NavLink>Mocktails</NavLink></Tab>
                <Tab><NavLink>R & D</NavLink></Tab>
                <Tab><NavLink>Pastiche</NavLink></Tab>
            <Tab><SearchBar
                    onSubmit=""
                    id="search-bar"
                    type="text"
                    placeholder="Search"
                    value={props.searchValue}
                    onChange={props.searchHandler}
                /></Tab>
            </Navigation>
        </div>
    )
}

export default NavBar

const NavLink = styled.b `
    color: #d9919a;
    display: block;
    padding: 25px; 
    display: inline;    
    bottom: 10px;
   
`
const Tab = styled.a `
    display: inline;
`

const Wrapper = styled.div `
height: 20%;
position: fixed;
top: 0;
width: 100%;
border: 3px solid white;
overflow: hidden;
    :hover {
        color: #fec196;
    }
`

const Navigation = styled.ul `
    list-style-type: none;
    margin: 0;
    padding: 0;
    ${'' /* height: 20%; */}
    background: #052B38;
    color: white;
    text-align: center;
    ${'' /* position: fixed; */}
    top: 0;
    width: 100%;
    ${'' /* background-image: url(${PasticheHeader}); */}
`

const SearchBar = styled.input `
    padding: 15px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 4px solid #fec196;
    background-color: #fefbfa;
    :focus {
        background-color: #d9919a;
    }
`