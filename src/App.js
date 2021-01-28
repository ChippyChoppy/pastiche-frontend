import './App.css';
import Header from './Containers/Header'
import NavBar from './Containers/NavBar'
import ViewContainer from './Containers/ViewContainer'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

class App extends React.Component {
  state = {
    searchValue: "",
    profileClicked: false,
    allMocktailsClicked: false,
    rAndDClicked: false
  }

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  profileHandler = () => {

  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <NavBar searchValue={this.state.searchValue} searchHandler={this.searchHandler} profileClicked={this.state.profileClicked} allMocktailsClicked={this.state.allMocktailsClicked} rAndDClicked={this.state.rAndDClicked} searchClicked={this.state.searchClicked} />
        <Switch>
          <Route path="/" render={() => <ViewContainer searchValue={this.state.searchValue} />} />
        </Switch>
      </div>
    );
  }
}

export default App;

// const BodyWrapper = styled.div `
// background-color: #052b38;
// color: #fefbfa;
// height: 100vh;
// width: 100vw;
// border: 3px solid white;
// margin: 5px;
// padding: 5px
// `