import React from 'react'
import MocktailCard from '../Components/MocktailCard'
import RandDCard from '../Components/RandDCard'

const MocktailContainer = (props) => {
    {/* <RandDCard key={mocktail.id} mocktail={mocktail} /> */ }

    return (
        <div className="mocktail-container">
            {props.mocktailArray.map((mocktail) => {
                return (
                    <MocktailCard key={mocktail.id} mocktail={mocktail} mockIngredArray={props.mockIngredArray} />
                )
            })}
        </div>
    )
}

export default MocktailContainer