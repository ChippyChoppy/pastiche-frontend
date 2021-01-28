import React from 'react'
import styled from 'styled-components'

const Buttons = () => {

    return (
        <div>
            <Button><b>Create New Mocktail</b></Button>
            <p />
            <Button><b>Favorite Mocktails</b></Button>
            <p />
            <Button><b>My Mocktails</b></Button>
            <p />
            <Button><b>My Notebook</b></Button>
        </div>

    )
}

export default Buttons

const Button = styled.button `
    background: #900551;
    color: #fefbfa;
    height: 40px;
    border: 3px solid #fec196;
    border-style: outset;
    margin: 4px 15px;
    box-shadow: 0px 0px 15px 4px #052b38;
    :hover {
        background: #052b38;
    }
    
`