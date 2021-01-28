import React from 'react'
import MocktailContainer from './MocktailContainer'
import MyContainer from './MyContainer'
import styled from 'styled-components'

class ViewContainer extends React.Component {

    state = {
        arrayOfMocktails: [],
        usersMocktailArray: [],
        mockIngredArray: [],
        mockTagArray: [],
        ingredientArray: [],
        measurementArray: [],
        tagsArray: [],
        userArray: [],
        notesArray: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/mocktails')
            .then(response => response.json())
            .then(allMocktails => {
                this.setState({ arrayOfMocktails: allMocktails })
            })
        fetch('http://localhost:3000/api/v1/notes')
            .then(response => response.json())
            .then(allNotes => {
                this.setState({ notesArray: allNotes })
            })
        fetch('http://localhost:3000/api/v1/ingredients')
            .then(response => response.json())
            .then(allIngredients => {
                this.setState({ ingredientArray: allIngredients })
            })
        fetch('http://localhost:3000/api/v1/measurements')
            .then(response => response.json())
            .then(allMeasurements => {
                this.setState({ measurementArray: allMeasurements })
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
                this.setState({ userArray: user })
            })
        fetch('http://localhost:3000/api/v1/users_mocktails')
            .then(response => response.json())
            .then(allFavorites => {
                this.setState({ usersMocktailArray: allFavorites })
            })
    }

    createMocktailHandler = (mocktailObject) => {
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
    }

    createNoteHandler = (noteObject) => {
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
                console.log(newNoteObject)
                console.log(this.state.notesArray)
                this.setState({ notesArray: [...this.state.notesArray, newNoteObject] })
                console.log(this.state.notesArray)
            })
    }

    createFavoriteMocktail = (favoriteObject) => {
        fetch('http://localhost:3000/api/v1/users_mocktails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(favoriteObject)
        })
            .then(response => response.json())
            .then(newFavoriteObject => {
                console.log(newFavoriteObject)
                this.setState({ usersMocktailArray: [...this.state.usersMocktailArray, newFavoriteObject] })
                console.log(this.state.usersMocktailArray)
            })
    }

    filterMocktails = () => {
        // console.log(this.state.arrayOfMocktails)
        let filteredMocktails = [...this.state.arrayOfMocktails]
        if (this.props.searchValue !== "") {
            filteredMocktails = filteredMocktails.filter(mocktail => mocktail.name.toLowerCase().includes(this.props.searchValue.toLowerCase())
            )
            return filteredMocktails
        } else {
            return filteredMocktails
        }
    }

    sendDownFavs = () => {
        this.state.usersMocktailArray.map((fav) => {
            let usersMocktail = fav
            return usersMocktail
        })
    }

    render() {
        return (
            this.state.usersMocktailArray.map((fav) => {
                console.log(fav)
                return (
                    <div className="view-container">
                        <MocktailContainer
                            notesArray={this.state.notesArray}
                            mocktailArray={this.filterMocktails()}
                            mockIngredArray={this.state.mockIngredArray}
                            noteSubmitHandler={this.createNoteHandler}
                            favoriteSubmitHandler={this.createFavoriteMocktail}
                            usersMocktailArray={fav}
                        />
                    </div>
                )
            })
        )
        {/* <MyContainer 
                    createMocktailHandler={this.createMocktailHandler} 
                    ingredientArray={this.state.ingredientArray} 
                    measurementArray={this.state.measurementArray} 
                    tagArray={this.state.tagsArray} 
                    userArray={this.state.userArray} 
                    mocktailObject={this.state.mocktailObject} /> */}
    }
}

export default ViewContainer

const Wrapper = styled.div`
    height: 75%;
    width: 100vw;
    display: flex;
    border: 3px solid pink;
    position: fixed;
    bottom: 0px;
`;