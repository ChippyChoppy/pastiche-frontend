import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

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
            <div className="mocktail-card" >
                {this.renderMocktailCard()}
            </div>

        )
    }
}

export default MocktailCard