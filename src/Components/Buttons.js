import React from 'react'
import styled from 'styled-components'

const Buttons = () => {

    return (
        <div>
            <Button>Create New Mocktail</Button>
            <br />
            <Button>Favorite Mocktails</Button>
            <br />
            <Button>My Mocktails</Button>
            <br />
            <Button>My Notebook</Button>
        </div>

    )
}

export default Buttons

const Button = styled.button `
    background: pink;
`