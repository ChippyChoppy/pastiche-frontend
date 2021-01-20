import React from 'react'

class CardBack extends React.Component {
    
    localClickHandler = () => {
        this.props.cardClickHandler()
    }

    renderCardBack = () => {
        console.log(this.props.mocktailObject.ingredients)
        return (
            <div className="card-back" onClick={this.localClickHandler} >
                <h3>{this.props.mocktailObject.name} Recipe</h3>
                <p>by: {this.props.mocktailObject.creator}</p>
                <p>glassware: {this.props.mocktailObject.glassware}</p>
                <h5>Ingredients:{this.renderIngredientList()}</h5>
                <p>{this.props.mocktailObject.about}</p>
                <p>{this.props.mocktailObject.instructions}</p>
            </div>
        )
    }

    renderIngredientList = () => {
        this.props.mocktailObject.mock_ingreds.map((mockIngred) =>  this.props.mocktailObject.ingredients.find((ingredient) => this.props.mocktailObject.measurements.find((measurement) => {
            if (mockIngred.ingredient_id === ingredient.id && mockIngred.measurement_id === measurement.id) {
                return (<li>{measurement.imperial} {measurement.metric} {ingredient.name}</li>)
            }
        })))
    }
         // console.log(mocktailItem)
            // console.log(this.props.mocktailObject.ingredients)
            // if (mocktailItem.ingredient_id === this.props.mocktailObject.ingredients.id && mocktailItem.measurement_id === this.props.mocktailObject.measurements.id) {
            //     return <li>{this.props.mocktailObject.measurements.imperial}/{this.props.mocktailObject.measurements.metric} <b>{this.props.mocktailObject.ingredients.name}</b></li>
            // }
    render() {
        return (
            <div>{this.renderCardBack()}</div>
        )
    }
}
export default CardBack