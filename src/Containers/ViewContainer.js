import React from 'react'
import MocktailContainer from './MocktailContainer'
import MyContainer from './MyContainer'
import styled from 'styled-components'

class ViewContainer extends React.Component {

    state = {
        arrayOfMocktails: [],
        mockIngredArray: [],
        mockTagArray: [],
        ingredientArray: [],
        measurementArray: [],
        tagsArray: [],
        userArray: [],
        notesArray: [],
        mocktailObject: {},
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/mocktails')
            .then(response => response.json())
            .then(allMocktails => {
                this.setState({ arrayOfMocktails: allMocktails })
                console.log(this.state.arrayOfMocktails)
            })
        fetch('http://localhost:3000/api/v1/notes')
            .then(response => response.json())
            .then(allNotes => {
                this.setState({ notesArray: allNotes})
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
        fetch('http://localhost:3000/api/v1/users')
            .then(response => response.json())
            .then(user => {
                this.setState({ userArray: user})
            })
    }

    createMocktailHandler(mocktailObject) {
        console.log(mocktailObject)
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
                console.log(newMocktailObject)
                this.setState({ arrayOfMocktails: [...this.state.arrayOfMocktails, newMocktailObject] })
            })
            // .then(newMocktailObject => {
            //     newMocktailObject.ingredi
            // })
            // .then(newMockIngredObject => {
            //     this.setState({ mockIngredArray: [...this.state.mockIngredArray, newMockIngredObject.mock_ingreds] })
            // })
            // .then(newMockIngredObject => {
            //     this.setState({ mockTagArray: newMockIngredObject.mock_tags })
            // })
    }

    createNoteHandler(noteObject) {
        fetch('http://localhost:3000/api/v1/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(noteObject)
        })
            .then(response => response.json())
            .then(newNoteObject => {
                this.setState({ notesArray: [...this.state.notesArray, newNoteObject] })
            })
    }

    filterMocktails = () => {
        console.log(this.state.arrayOfMocktails)
        let filteredMocktails = [...this.state.arrayOfMocktails]
        if (this.props.searchValue !== "") {
            filteredMocktails = filteredMocktails.filter(mocktail => mocktail.name.toLowerCase().includes(this.props.searchValue.toLowerCase()) 
            )
            return filteredMocktails
        } else {
            return filteredMocktails
        }
    }
    // || mocktail.ingredients.name.toLowerCase().includes(this.props.searchValue.toLowerCase())

    favClickHandler = (mocktailObject) => {
        this.setState({ selectedCard: mocktailObject, favBeenClicked: !this.state.favBeenClicked })
    }

    render() {
        console.log(this.state.userArray)
        return (
            <Wrapper className="view-container">
                <MocktailContainer usersArray={this.state.userArray} mocktailArray={this.filterMocktails()} mockIngredArray={this.state.mockIngredArray} submitHandler={this.createNoteHandler} />
                <MyContainer createMocktailHandler={this.createMocktailHandler} ingredientArray={this.state.ingredientArray} measurementArray={this.state.measurementArray} tagArray={this.state.tagsArray} userArray={this.state.userArray} mocktailObject={this.state.mocktailObject} />
            </Wrapper>
        )
    }
}

export default ViewContainer

const Wrapper = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
`;