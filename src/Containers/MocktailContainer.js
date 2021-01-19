import React from 'react'

class MocktailContainer extends React.Component {

    renderNotes = () => {
        return this.props.mocktailArray.map(mocktail => {
            return (
                <div>
                    <p>Mocktail Name: {mocktail.name} </p>
                    <img alt={mocktail.name} src={mocktail.image} />
                </div>)
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>{this.renderNotes()}</div>
        )
    }
}

export default MocktailContainer