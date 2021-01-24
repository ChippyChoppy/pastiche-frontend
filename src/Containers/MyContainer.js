import React from 'react'
import NewMocktailForm from '../Components/NewMocktailForm'

const MyContainer = (props) => {
    {/* <RandDCard key={mocktail.id} mocktail={mocktail} /> */ }
    console.log(props)

    return (
        <div className="mocktail-container">
            return (
                <NewMocktailForm createMocktailHandler={props.createMocktailHandler} ingredientArray={props.ingredientArray} measurementArray={props.measurementArray} tagArray={props.tagArray} />
            )
        </div>
    )
}

export default MyContainer