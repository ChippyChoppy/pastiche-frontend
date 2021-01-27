import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import CardNote from './CardNote'
import styled from 'styled-components'

class MocktailCard extends React.Component {
    state = {
        beenClicked: false,
        hover: false,
        favorite: false
    }

    renderMocktailCard = () => {
        if (this.state.hover && this.state.beenClicked) {
            return (
                <CardNote
                    key={this.props.mocktail.id} 
                    mocktailObject={this.props.mocktail}
                    cardClickHandler={this.cardClickHandler} 
                    noteSubmitHandler={this.props.noteSubmitHandler}
                    notesArray={this.props.notesArray} />
            )
        }
        if (this.state.hover && !this.state.beenClicked) {
            return (
                <CardBack
                    key={this.props.mocktail.id} 
                    beenClicked={this.state.beenClicked}
                    cardClickHandler={this.cardClickHandler}
                    mocktailObject={this.props.mocktail}
                    mockIngredArray={this.props.mockIngredArray}
                    favoriteSubmitHandler={this.props.favoriteSubmitHandler}
                />
            )
        }
        else {
            return (
                <CardFront
                    key={this.props.mocktail.id} 
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

    favoriteClickHandler = () => {
        this.setState({ favorite: true })
    }

    render() {
        return (
            <>
                <StyledCard
                    // onMouseEnter={() => this.setState({hover: true})} 
                    onMouseLeave={() => this.setState({ beenClicked: false, hover: false })}
                    cardClickHandler={this.cardClickHandler}
                    className="mocktail-card" >
                    {this.renderMocktailCard()}
                </StyledCard>
            </>


        )
    }
}

export default MocktailCard

const StyledCard = styled.div`
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