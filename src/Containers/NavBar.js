import React from 'react'
import styled from 'styled-components'
import PasticheHeader from './PasticheHeader.png'
import { NavLink } from 'react-router-dom'
// look into NavLink documentation for this

class NavBar extends React.Component {

    profileClickHandler = () => {
        
    }
    render() {
        return (
            <div>
                <Navigation>
                    <Tab><NavLink to='/profile'><StyledB>My Profile</StyledB></NavLink></Tab>
                    <Tab><NavLink to='/'><StyledB>Mocktails</StyledB></NavLink></Tab>
                    <Tab><SearchBar                        
                        id="search-bar"
                        type="text"
                        placeholder="Search"
                        value={this.props.searchValue}
                        onChange={this.props.searchHandler}
                    /></Tab>
                </Navigation>
            </div>
        )
    }

}

export default NavBar

const StyledB = styled.b`
    color: #d9919a;
    display: block;
    padding: 25px; 
    display: inline;    
    bottom: 10px;
   
`
const Tab = styled.li`
    display: inline;
        :hover {
            color: #fec196
        }
`

const Wrapper = styled.div`
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

const Navigation = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 20%;
    background: #052B38;
    color: white;
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
    background-image: url(${PasticheHeader});
`

const SearchBar = styled.input`
    padding: 15px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 4px solid #fec196;
    background-color: #fefbfa;
    :focus {
        background-color: #d9919a;
    }
`