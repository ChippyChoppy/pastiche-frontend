import React from 'react'
import MocktailCard from '../Components/MocktailCard'
import RandDCard from '../Components/RandDCard'
import styled from 'styled-components'

const MocktailContainer = (props) => {
    {/* <RandDCard key={mocktail.id} mocktail={mocktail} /> */ }

    return (
        <MockContainer className="mocktail-container">
            {props.mocktailArray.map((mocktail) => {
                return (
                    <MocktailCard key={mocktail.id} mocktail={mocktail} mockIngredArray={props.mockIngredArray} />
                )
            })}
        </MockContainer>
    )
}

export default MocktailContainer

const MockContainer = styled.div `
    display: flex;
    flex-flow; row wrap;
    justify-content: space-evenly;
`;


  
  