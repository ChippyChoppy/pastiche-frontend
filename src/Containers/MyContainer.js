import React from 'react'
import NewMocktailForm from '../Components/NewMocktailForm'
import ProfileSidebar from './ProfileSidebar'
import styled from 'styled-components'

const MyContainer = (props) => {
    {/* <RandDCard key={mocktail.id} mocktail={mocktail} /> */ }
    console.log(props)

    return (
        <Wrapper className="mocktail-container">
                <ProfileSidebar userArray={props.userArray} />
                <br/>
                <NewMocktailForm submitHandler={props.createMocktailHandler} ingredientArray={props.ingredientArray} measurementArray={props.measurementArray} tagArray={props.tagArray} mocktailObject={props.mocktailObject} />
        </Wrapper>
    )
}

export default MyContainer

const Wrapper = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
`;