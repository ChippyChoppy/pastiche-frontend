import React from 'react'
import styled from 'styled-components'
import {GiHeartBottle} from 'react-icons/gi'

class CardBack extends React.Component {

    localClickHandler = () => {
        this.props.cardClickHandler()
    }

    renderIngredientList = () => {
        return (
            this.props.mockIngredArray.map((mockIngred) => {
                if (this.props.mocktailObject.id === mockIngred.mocktail.id) {
                    return (<ul>
                        <li>{mockIngred.measurement.imperial} / {mockIngred.measurement.metric} <b>{mockIngred.ingredient.name}</b></li>
                    </ul>
                    )
                }

            })
        )
    }

    renderMainCardBack = () => {
        return (
            <div className="card-back" onClick={this.localClickHandler} >
                <h3>{this.props.mocktailObject.name} Recipe</h3>
                <GiHeartBottle />
                <p>by: {this.props.mocktailObject.creator}</p>
                <p>glassware: {this.props.mocktailObject.glassware}</p>
                <h5>Ingredients:</h5>
                {this.renderIngredientList()}
                <p>{this.props.mocktailObject.about}</p>
                <p>{this.props.mocktailObject.instructions}</p>
            </div>
        )
    }




    // console.log(mocktailItem)
    // console.log(this.props.mocktailObject.ingredients)
    // if (mocktailItem.ingredient_id === this.props.mocktailObject.ingredients.id && mocktailItem.measurement_id === this.props.mocktailObject.measurements.id) {
    //     return <li>{this.props.mocktailObject.measurements.imperial}/{this.props.mocktailObject.measurements.metric} <b>{this.props.mocktailObject.ingredients.name}</b></li>
    // }
    render() {
        return (
            <div>{this.renderMainCardBack()}</div>
        )
    }
}
export default CardBack

const FavBottle = styled.p `
    height: 15px;
`