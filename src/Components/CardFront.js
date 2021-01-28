import React from 'react'
import styled from 'styled-components'
import Rating from 'react-rating'

class CardFront extends React.Component {

    renderCardFront = () => {
        // console.log(this.props)
        return (
            <div className="card-front"  >
                <div>
                    <Image className="mocktail-img" alt={this.props.mocktailObject.name} src={this.props.mocktailObject.image} onMouseEnter={this.props.onMouseEnter} />
                    <h3>{this.props.mocktailObject.name}</h3>
                    {this.props.mocktailObject.tags.map((mockTag) => { return <button>{mockTag.tag}</button> })}
                    <br />
                    <Rating
                        initialRating={this.props.mocktailObject.rating}
                    />
                    {/* // add an onclick to Rating with setState for rating, probably have to change rating to state further up to make this change, but whatevs, we'll get there*/}
                </div>
            </div>
        )
    }

    // localClickHandler = () => {
    //     this.props.cardClickHandler()
    // } onClick={this.localClickHandler}

    render() {
        return (
            <CardDiv>{this.renderCardFront()}</CardDiv>
        )
    }
}
export default CardFront

const CardDiv = styled.div`
        flex-basis: auto;

    transition: all 0.5s ease-in-out 0s;
`

const Image = styled.img`
    object-fit: contain;
    max-width: 95%;
    max-height: 275px; 
    border: 6px solid #fec196;
    border-style: inset; 
    justify-content: center;
`
