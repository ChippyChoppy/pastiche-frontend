import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import styled from 'styled-components'

class MocktailCard extends React.Component {
    state = {
        beenClicked: false
    }

    renderMocktailCard = () => {
        if (this.state.beenClicked) {
            return (
                <CardBack
                    beenClicked={this.state}
                    cardClickHandler={this.cardClickHandler}
                    mocktailObject={this.props.mocktail}
                    mockIngredArray={this.props.mockIngredArray}
                />
            )
        } else {
            return (
                <CardFront
                    beenClicked={this.state}
                    cardClickHandler={this.cardClickHandler}
                    mocktailObject={this.props.mocktail}
                />
            )

        }
    }
    cardClickHandler = () => {
        this.setState({ beenClicked: !this.state.beenClicked })
    }

    // localClickHandler = () => {
    //     this.props.cardClickHandler()
    // }

    render() {
        // console.log(this.props)
        return (
            <Card className="mocktail-card" >
                {this.renderMocktailCard()}
            </Card>

        )
    }
}

export default MocktailCard

const Card = styled.div`
    display: inline;
    justify-content: space-evenly;
    padding: 15px 15px;
    margin: 10px 0px;
    text-align: left;
    color: black;
    border-radius: 0px;
    border: 3px solid #dddd22;
    width: 40%;
    background: lightgrey;
`