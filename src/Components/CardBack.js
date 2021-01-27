import React from 'react'
import styled from 'styled-components'
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
} from 'react-awesome-button'

class CardBack extends React.Component {
    state = {
        user_id: 1,
        mocktail_id: this.props.mocktailObject.id,
        r_and_d: true,
        favorite: false
    }

    renderIngredientList = () => {
        return (
            this.props.mockIngredArray.map((mockIngred) => {
                if (this.props.mocktailObject.id === mockIngred.mocktail.id) {
                    return (<IngredientList>
                        <li>{mockIngred.measurement.imperial} / {mockIngred.measurement.metric} <b>{mockIngred.ingredient.name}</b></li>
                    </IngredientList>
                    )
                }
            })
        )
    }

    localClickHandler = () => {
        this.props.cardClickHandler()
    }

    favoriteSetter = () => {
        this.setState({ favorite: true })
    }

    localFavoriteSubmitHandler = (e) => {
        e.preventDefault()
        let favoriteObject = this.state
        this.props.favoriteSubmitHandler(favoriteObject)
    }

    renderMainCardBack = () => {
        if (this.state.favorite) {
            return (
                <div className="card-back" >
                    <h3>{this.props.mocktailObject.name}</h3>
                    <p><StyledB>Created by:</StyledB> {this.props.mocktailObject.creator} <br />
                        <StyledB>Glassware:</StyledB> {this.props.mocktailObject.glassware} </p>
                    <StyledB>Ingredients:</StyledB>
                    {this.renderIngredientList()}
                    <p><StyledB>Instructions:</StyledB>{this.props.mocktailObject.instructions}</p>
                    <button onClick={this.localClickHandler}  >Notes</button>
                </div>
            )
        } else {
            return (
                <div className="card-back" >
                    <h3>{this.props.mocktailObject.name}</h3>
                    <p><StyledB>Created by:</StyledB> {this.props.mocktailObject.creator} <br />
                        <StyledB>Glassware:</StyledB> {this.props.mocktailObject.glassware} </p>
                    <StyledB>Ingredients:</StyledB>
                    {this.renderIngredientList()}
                    <p><StyledB>Instructions:</StyledB>{this.props.mocktailObject.instructions}</p>
                    <input type="submit" onClick={this.localFavoriteSubmitHandler, this.favoriteSetter}  value="Add to Favorites"/>
                </div>
            )

        }
    }

    render() {
        console.log(this.state.favorite)
        return (
            <div>{this.renderMainCardBack()}</div>
        )
    }
}
export default CardBack

const StyledB = styled.b`
    color: #d9919a;
`
const IngredientList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`