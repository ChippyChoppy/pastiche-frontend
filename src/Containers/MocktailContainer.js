import React from 'react'
import MocktailCard from '../Components/MocktailCard'
import RandDCard from '../Components/RandDCard'

const MocktailContainer = (props) => {
                    {/* <MocktailCard key={mocktail.id} mocktail={mocktail} /> */ }

    return (
        <div className="mocktail-container">
            {props.mocktailArray.map((mocktail) => {
                return (
                    <RandDCard key={mocktail.id} mocktail={mocktail} />
                    )
            })}
        </div>
    )
}

export default MocktailContainer