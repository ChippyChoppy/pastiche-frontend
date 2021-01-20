import React from 'react'
import MocktailCard from '../Components/MocktailCard'

const MocktailContainer = (props) => {

        return (
            <li className="mocktail-container">
                {props.mocktailArray.map((mocktail) => {
                    return (
                        <MocktailCard key={mocktail.id} mocktail={mocktail} />
                    )
                })}
            </li>
        )
}

export default MocktailContainer