import React from 'react'
import styled from 'styled-components'
import Rating from 'react-rating'

class CardFront extends React.Component {

    renderCardFront = () => {
        // console.log(this.props)
        return (
            <div className="card-front" onClick={this.localClickHandler} >
                <div>
                    <Image className="mocktail-img" alt={this.props.mocktailObject.name} src={this.props.mocktailObject.image} onMouseEnter={this.props.onMouseEnter} />
                    <h3>{this.props.mocktailObject.name}</h3>
                    {this.props.mocktailObject.tags.map((mockTag) => { return <button>{mockTag.tag}</button> })}
                </div>
                <div>
                    <Rating
                        initialRating={this.props.mocktailObject.rating}
                    />
                </div>
            </div>
        )
    }

    localClickHandler = () => {
        this.props.cardClickHandler()
    }

    render() {
        return (
            <div>{this.renderCardFront()}</div>
        )
    }
}
export default CardFront

const CardDiv = styled.div`
    
`

const Image = styled.img`
    object-fit: contain;
    max-width: 95%;
    max-height: 275px; 
    border: 6px solid #fec196;
    border-style: inset; 
    justify-content: center;
`
