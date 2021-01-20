import React from 'react' 
import CardFront from './CardFront'
import CardBack from './CardBack'

class RandDCard extends React.Component {
    state = {
        beenClicked: false,
        rAndD: ""
    }

    renderMocktailCard = () => {
        if (this.state.beenClicked) {
            return (
                <CardBack
                    beenClicked={this.state}
                    cardClickHandler={this.cardClickHandler}
                    mocktailObject={this.props.mocktail}
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

    render() {
        console.log(this.props)
        return (
            <div>{this.renderMocktailCard()}</div>
        )
    }
}

export default RandDCard