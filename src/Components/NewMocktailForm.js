import React from 'react'   
import styled from 'styled-components'

class NewMocktailForm extends React.Component {

    state = {
        name: "",
        creator: "",
        image: "",
        glassware: "",
        instructions: "",
        creator: "",
        // ingredientNumber: 0,
        rAndD: true,
        mockTags: [{
            mocktailId: null,
            tagId: ""
        }],
        mockIngreds: {
            measurementId: "",
            ingredientId: ""
        },
        usersMocktails: {
            userId: "",
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    mockIngredChangeHandler = (e) => {
        this.setState({ mockIngreds: {...this.state.mockIngreds, [e.target.name]: e.target.value} })
    }

    // mockMeasureChangeHandler = (e) => {
    //     this.setState({ mockIngreds:{[e.target.name]: e.target.value} })
    // }



    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }
    
    renderMeasurementList = () => {
        return (
            this.props.measurementArray.map((measurement) => {
                return (
                    <option
                        key={measurement.id}
                        type=""
                        name="mockIngreds.measurementId"
                        // placeholder="imperial/metric"
                        value={measurement.id}>
                        {measurement.imperial} / {measurement.metric}
                    </option>
                )
            })
        )
    }

    renderIngredientList = () => {
        return (
            this.props.ingredientArray.map((ingredient) => {
                return (
                    <option
                        key={ingredient.id}
                        type=""
                        name="mockIngreds.ingredientId"
                        // placeholder="Ingredient"
                        value={ingredient.id}>
                        {ingredient.name}
                    </option>
                )
            })
        )
    }

    renderTags = () => {
        return (
            this.props.tagArray.map((tag) => {
                return (
                    <FormButton 
                        onClick=""
                        key={tag.id}
                        type=""
                        name="mockTag.tagId"
                        value={tag.tag}>
                        {tag.tag}
                     </FormButton>
                )
                
            })
        )
    }

    // addIngredient = () => {
    //     this.setState({ ingredientNumber: this.state.ingredientNumber + 1 })
    // }
    // renderMoreIngreds = () => {
    //     let mock_ingreds = []
    //     for (let i = 0; i <= this.state.ingredientNumber; i++) {
    //         mock_ingreds.push(
    //             <label>
    //                 <select>
    //                     {this.renderMeasurementList()}
    //                 </select>
    //                 <select  >
    //                     {this.renderIngredientList()}
    //                 </select>
    //             </label>
    //         )
    //         return mock_ingreds
    //     }

    renderMoreIngreds = (e) => {
        e.preventDefault()
        console.log("clicked")
        return (
            <label>
                <select>
                    {this.renderMeasurementList()}
                </select>
                <select  >
                    {this.renderIngredientList()}
                </select>
            </label>
        )
    }

    renderMoreClickHandler = () => {
        
    }

render() {
    // console.log(this.state)
    return (
        <FormWrapper>
        <CreateDiv>        
            <h2>Submit a new Mocktail</h2>
        </CreateDiv>
           <TheFormItself onSubmit={this.submitHandler}>
            <FormLabel>
                <b>Name:</b> <br/>
                    <FormInput
                    type="text"
                    name="name"
                    placeholder="mocktail name"
                    value={this.state.name}
                    onChange={this.changeHandler} />
            </FormLabel>
            <br />
            <FormLabel>
                <b>Created by: </b><br/>
                    <FormInput
                    type="text"
                    name="creator"
                    placeholder="creator name"
                    value={this.state.creator}
                    onChange={this.changeHandler} />
            </FormLabel>
            <br />
            <FormLabel>
                <b>Image: </b><br/>
                    <FormInput
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={this.state.image}
                    onChange={this.changeHandler} />
            </FormLabel>
            <br />
            <FormLabel>
                <b>Glassware: </b><br/>
                    <FormInput
                    type="text"
                    name="glassware"
                    placeholder="serving glass"
                    value={this.state.glassware}
                    onChange={this.changeHandler} />
            </FormLabel>
            <br />
            <FormLabel>
                <b>Ingredients: </b>
                    <br />
                <IngredientDrop 
                    name="measurementId" 
                    onChange={this.mockIngredChangeHandler} >
                    {this.renderMeasurementList()}
                </IngredientDrop>
                <IngredientDrop
                    name="ingredientId"
                    onChange={this.mockIngredChangeHandler}>
                    {this.renderIngredientList()}
                </IngredientDrop>
                <FormButton onClick={()=> this.renderMoreIngreds}>+ Add Ingredient +</FormButton>
            </FormLabel>
            <br />
            <FormLabel>
                <b>Instructions: </b><br/>
                    <TextArea 
                        type="text" 
                        name="instructions"
                        placeholder="tell me how to make this"
                        value={this.state.instructions} 
                        onChange={this.changeHandler} />
            </FormLabel>
            <br />
            <FormLabel><b>Tag:</b> 
                    <br />
                {this.renderTags()}
            </FormLabel>
            <br />
            <FormInput type="submit" value="Submit" />
        </TheFormItself> 
        </FormWrapper>
        
    )
}
}

export default NewMocktailForm

const FormWrapper = styled.div `
    width: 70%;
    margin: 10px;
    padding: 20px;
    border: 12px solid #fec196;
    border-radius: 8px;
    border-style: outset;
    box-shadow: 0px 0px 15px 8px #900551;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: #fefbfa
`

const CreateDiv = styled.div `
    width: 80%
`

const TheFormItself = styled.form `
    border: 5px solid: #d9919a;
    padding: 5px;
    
`

const TextArea = styled.textarea `
width: 35%;
height: 150px;
padding: 12px 20px;
box-sizing: border-box;
border: 5px solid #d9919a;
border-radius: 8px;
border-style: inset;
background-color: #fefbfa;
resize: auto;
box-shadow: 0px 0px 15px 8px #900551;
margin: 10px 10px 10px 0px;

`

const FormInput = styled.input `
    flex-basis: auto;
    width: 35%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 5px solid #d9919a;
    border-radius: 8px;
    border-style: inset;
    background-color: #fefbfa;
    box-shadow: 0px 0px 15px 8px #900551;

    :focus {
        color: #052b38;
        border: 5px solid #fec196;
        border-style: inset;
    }
`
const FormLabel = styled.label `
margin: 10px 10px 10px 0px;
    
`
const IngredientDrop = styled.select `
flex-basis: auto;
    width: 35%;
    padding: 12px 20px;
    margin: 10px 10px 10px 0px;
    box-sizing: border-box;
    border: 5px solid #d9919a;
    border-radius: 8px;
    border-style: inset;
    background-color: #fefbfa;
    box-shadow: 0px 0px 15px 8px #900551;

`

const FormButton = styled.button `
    background-color: #900551;
    border: 3px solid #fec196;
    color: #fefbfa;
    margin: 10px 10px 10px 0px;
    border-radius: 8px;
    border-style: outset;
    padding: 8px;
    box-shadow: 0px 0px 15px 8px #900551;

    :hover {
        background-color: #d9919a;
        border: 3px solid #fec196;
        border-style: inset;
    }

`