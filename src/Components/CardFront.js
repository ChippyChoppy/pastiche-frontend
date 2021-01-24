import React from 'react'

class CardFront extends React.Component {

    renderCardFront = () => {
        // console.log(this.props)
            return (
                <div className="card-front" onClick={this.localClickHandler}>
                    <img className="mocktail-img" alt={this.props.mocktailObject.name} src={this.props.mocktailObject.image} />
                    <h3>{this.props.mocktailObject.name}</h3>
                    {this.props.mocktailObject.tags.map((mockTag) => {return <button>{mockTag.tag}</button>})}
                    <p>{this.props.mocktailObject.rating}</p>
                </div>
            )
        }

    // renderTags = () => {
    //     this.props.mocktailObject.tags.map((mockTag) => {return <button>{mockTag.tag}</button>})
    // }
    localClickHandler = () => {
        // console.log("clicked")
        this.props.cardClickHandler()
    }

    render() {
        // console.log("props in CardFront", this.props.mocktailObject.tags)
        return (
            <div>{this.renderCardFront()}</div>
        )
    }
}
export default CardFront