import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import CardNote from './CardNote'
import styled from 'styled-components'

class MocktailCard extends React.Component {
    state = {
        beenClicked: false,
        hover: false
    }

    renderMocktailCard = () => {
        if (this.state.hover && this.state.beenClicked) {
            return (
                <CardNote
                    cardClickHandler={this.cardClickHandler} />
            )
        }
        if (this.state.hover && !this.state.beenClicked) {
            return (
                <CardBack
                    beenClicked={this.state.beenClicked}
                    cardClickHandler={this.cardClickHandler}
                    mocktailObject={this.props.mocktail}
                    mockIngredArray={this.props.mockIngredArray}
                />
            )
        }
        else {
            return (
                <CardFront
                    onMouseEnter={() => this.setState({ hover: true })}
                    hover={this.state.hover}
                    beenClicked={this.state.beenClicked}
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
        console.log(this.props.usersArray)
        return (
            <>
                <Card
                    // onMouseEnter={() => this.setState({hover: true})} 
                    onMouseLeave={() => this.setState({ beenClicked: false, hover: false })}
                    onClick={this.cardClickHandler}
                    className="mocktail-card" >
                    {this.renderMocktailCard()}
                </Card>
                <CardNote submitHandler={this.props.submitHandler}/>
            </>


        )
    }
}

export default MocktailCard

const Card = styled.div`
    flex-basis: auto;
    padding: 15px 15px;
    margin: 10px 10px;
    text-align: left;
    color: black;
    border-radius: 8px;
    border: 10px solid #fec196;
    border-style: inset;
    width: 25%;
    background: #480a1b;
    color: #fefbfa;
    transition: all 0.5s ease-in-out 0s;
    :hover {
        border-style: outset;
    }
`;