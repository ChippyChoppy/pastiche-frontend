import React from 'react'
import MocktailContainer from './MocktailContainer'
import MyContainer from './MyContainer'

class ViewContainer extends React.Component {

    state = {
        arrayOfMocktails: [],
        mockIngredArray: [],
        ingredientArray: [],
        measurementArray: [],
        tagsArray: [],
        selectedCard: {},
        searchValue: ""
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/mocktails')
            .then(response => response.json())
            .then(allMocktails => {
                this.setState({ arrayOfMocktails: allMocktails })
            })
        fetch('http://localhost:3000/api/v1/ingredients')
            .then(response => response.json())
            .then(allIngredients => {
                this.setState({ ingredientArray: allIngredients })
            })
        fetch('http://localhost:3000/api/v1/measurements')
            .then(response => response.json())
            .then(allMeasurements => {
                console.log(allMeasurements)
                this.setState({ measurementArray: allMeasurements })
                console.log(this.state.measurementArray)
            })
        fetch('http://localhost:3000/api/v1/mock_ingreds')
            .then(response => response.json())
            .then(mockIngreds => {
                this.setState({ mockIngredArray: mockIngreds })
            })
        fetch('http://localhost:3000/api/v1/tags')
            .then(response => response.json())
            .then(tag => {
                this.setState({ tagsArray: tag })
            })
    }

    createMocktailHandler(mocktailObject) {
        fetch('http://localhost:3000/api/v1/mocktails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(mocktailObject)
        })
            .then(response => response.json())
            .then(newMocktailObject => {
                this.setState({ arrayOfMocktails: [...this.state.arrayOfMocktails, newMocktailObject] })
            })
    }

    createMockIngredHandler(mockIngredObject) {
        fetch('http://localhost:3000/api/v1/mock_ingreds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(mockIngredObject)
        })
            .then(response => response.json())
            .then(newMockIngredObject => {
                this.setState({ mockIngredArray: [...this.state.mockIngredArray, newMockIngredObject] })
            })
    }

    filterMocktails = () => {
        let filteredMocktails = [...this.state.arrayOfMocktails]
        if (this.state.searchValue !== "") {
            filteredMocktails = filteredMocktails.filter(mocktail => mocktail.name.toLowerCase().includes(this.state.searchValue.toLowerCase()) || mocktail.ingredient.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
            )
            return filteredMocktails
        } else {
            return filteredMocktails
        }
    }

    favClickHandler = (mocktailObject) => {
        this.setState({ selectedCard: mocktailObject, favBeenClicked: !this.state.favBeenClicked })
    }

    render() {
        return (
            <div className="view-container">
                <MocktailContainer mocktailArray={this.filterMocktails()} mockIngredArray={this.state.mockIngredArray} />
                <MyContainer createMocktailHandler={this.createMocktailHandler} ingredientArray={this.state.ingredientArray} measurementArray={this.state.measurementArray} tagArray={this.state.tagsArray} />
            </div>
        )
    }
}

export default ViewContainer