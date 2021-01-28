import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <StyledHeader className="header" id="myHeader">
            <h1>Pastiche App</h1>
        </StyledHeader>
    )
}

export default Header

const StyledHeader = styled.div `
    height: 20%;
    width: 100vw;
    position: fixed;
    border: 3px solid white;
`