import React from 'react'
import styled from 'styled-components'
import PasticheHeaderLogo from './PasticheHeaderLogo.png'
import { NavLink } from 'react-router-dom'
// look into NavLink documentation for this

class NavBar extends React.Component {

    profileClickHandler = () => {
        
    }
    render() {
        return (
            <div>
                <Navigation>
                    <Tab><img src={PasticheHeaderLogo}/></Tab>
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
    color: #fefbfa;
    display: block;
    padding: 15px; 
    display: inline;    
    bottom: 10px;
    border: 3px solid #fec196;
    border-style: outset;
    margin: 5px;
    box-shadow: 0px 0px 15px 8px #900551;
   :hover {
            color: #fefbfa;
            background: #900551;
            padding: 15px;
            border: 4px solid #fec196;
        }
`
const Tab = styled.li`
    display: inline;
    
        
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
    ${'' /* height: 20%; */}
    background: #052B38;
    color: white;
    text-align: center;
    ${'' /* position: fixed; */}
    top: 0;
    width: 100%;
    ${'' /* background-image: url(${PasticheHeader}); */}
`

const SearchBar = styled.input`
    padding: 15px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 4px solid #fec196;
    background-color: #fefbfa;
    box-shadow: 0px 0px 15px 8px #900551;
    :focus {
        background-color: #d9919a;
    }
`