import React from 'react'
import styled from 'styled-components'
import PasticheHeader from './PasticheHeader.png'

const Header = () => {
    return (
        <StyledHeader className="header" id="myHeader">
            <h1>Pastiche App</h1>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div `
    background-image: url(${PasticheHeader})
    height: 20%;
    width: 100vw;
    position: fixed;
    border: 3px solid white;
`