import React from 'react'
import MocktailContainer from './MocktailContainer'

class ViewContainer extends React.Component {

    state = {
        arrayOfMocktails: [],
        searchValue: ""
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/v1/mocktails')
            .then(response => response.json())
            .then(allMocktails => {
                console.log(allMocktails)
                this.setState({ arrayOfMocktails: allMocktails })
                console.log(this.state)
            })
    }
    filterMocktails = () => {
        let filteredMocktails = [...this.state.arrayOfMocktails]
        if (this.state.searchValue !== "") {
            filteredMocktails = filteredMocktails.filter(mocktail => mocktail.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) || mocktail.ingredient.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
            return filteredMocktails
        } else {
            return filteredMocktails
        }
    }

    render() {
        return (
            <div>
                <MocktailContainer mocktailArray={this.filterMocktails()} />
            </div>
        )
    }
}

export default ViewContainer