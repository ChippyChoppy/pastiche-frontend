import React from 'react'
import styled from 'styled-components'

class CardBack extends React.Component {
    state = {
        user_id: 1,
        mocktail_id: this.props.key,
        r_and_d: true,
        favorite: true
    }

    localClickHandler = () => {
        this.props.cardClickHandler()
    }

    favoriteSetter = () => {
        this.setState({ user_id: 1, mocktail_id: this.props.mocktailObject.id, r_and_d: true, favorite: true })
    }

    localFavoriteSubmitHandler = (e) => {
        e.preventDefault()
        let favoriteObject = { user_id: 1, mocktail_id: this.props.mocktailObject.id, r_and_d: true, favorite: true }
        this.props.favoriteSubmitHandler(favoriteObject)
    }

    renderIngredientList = () => {
        console.log(this.props.mocktailObject.id)
        return (
            this.props.mockIngredArray.map((mockIngred) => {
                console.log(mockIngred)
                if (this.props.mocktailObject.id === mockIngred.mocktail.id) {
                    return (<IngredientList>
                        <li>{mockIngred.measurement.imperial} / {mockIngred.measurement.metric} <b>{mockIngred.ingredient.name}</b></li>
                    </IngredientList>
                    )
                }
            })
        )
    }

    renderFavoriteCardBack = () => {
        return (
            this.props.usersMocktailArray.map((favorite) => {
                if (this.props.mocktailObject.id === favorite.mocktail.id) {
                    return (
                        <div className="card-back" >
                            <h3>{this.props.mocktailObject.name}</h3>
                            <p><StyledB>Created by:</StyledB> {this.props.mocktailObject.creator} <br />
                                <StyledB>Glassware:</StyledB> {this.props.mocktailObject.glassware} </p>
                            <StyledB>Ingredients:</StyledB>
                            {this.renderIngredientList()}
                            <p><StyledB>Instructions:</StyledB>{this.props.mocktailObject.instructions}</p>
                            <Button onClick={this.localClickHandler}  >Notes</Button>
                        </div>
                    )
                }
            })
        )
    }

    renderNotFavoriteCardBack = () => {
        return (
            <div className="card-back" >
                <h3>{this.props.mocktailObject.name}</h3>
                <p><StyledB>Created by:</StyledB> {this.props.mocktailObject.creator} <br />
                    <StyledB>Glassware:</StyledB> {this.props.mocktailObject.glassware} </p>
                <StyledB>Ingredients:</StyledB>
                {this.renderIngredientList()}
                <p><StyledB>Instructions:</StyledB>{this.props.mocktailObject.instructions}</p>
                <Button type="submit" onClick={this.localFavoriteSubmitHandler} value="Submit" >Add to favorites</Button>
            </div>
        )
    }

    conditionallyRenderCardBack = () => {
        const variable = this.props.usersMocktailArray.find((mocktail) =>
            mocktail.mocktail_id === this.props.mocktailObject.id
        )
        console.log(variable)
        if (variable) {
            return (
                this.renderFavoriteCardBack()
            )
        } else {
            return (
                this.renderNotFavoriteCardBack()

            )
        }
    }

    render() {
        console.log(this.props.mocktailObject.id)
        console.log(this.props)
        console.log(this.props.usersMocktailArray)
        console.log(this.props.usersMocktailArray[0].mocktail.id)
        return (
            <div>
                {this.conditionallyRenderCardBack()}
                {/* {this.props.mocktailObject.users_mocktails.length > 0 ? this.renderFavoriteCardBack() : this.renderNotFavoriteCardBack()} */}
            </div>
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

const Button = styled.button `
    background: #900551;
    color: #fefbfa;
    height: 40px;
    border: 3px solid #fec196;
    border-style: outset;
    margin: 15px 10px 15px 0px;
    box-shadow: 0px 0px 15px 4px #d9919a;
    :hover {
        background: #052b38;
    }
`