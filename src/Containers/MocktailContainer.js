import React from 'react'
import MocktailCard from '../Components/MocktailCard'
import RandDCard from '../Components/RandDCard'
import styled from 'styled-components'

const MocktailContainer = (props) => {
    {/* <RandDCard key={mocktail.id} mocktail={mocktail} /> */ }


    return (
        <StyledMockContainer className="mocktail-container">
            {props.mocktailArray.map((mocktail) => {
                return (
                    <MocktailCard 
                        key={mocktail.id} 
                        mocktail={mocktail} 
                        notesArray={props.notesArray} 
                        mockIngredArray={props.mockIngredArray} 
                        noteSubmitHandler={props.noteSubmitHandler} 
                        favoriteSubmitHandler={props.favoriteSubmitHandler}
                        usersMocktailArray={props.usersMocktailArray}
                    />
                )
            })}
        </StyledMockContainer>
    )
}

export default MocktailContainer

const StyledMockContainer = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    border: 3px solid gray;
    justify-content: space-evenly;
    align-content: space-around;
    overflow: scroll;
`;


  
  