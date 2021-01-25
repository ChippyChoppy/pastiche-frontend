import React from 'react'

class NewMocktailForm extends React.Component {

    state = {
        name: "",
        image: "",
        glassware: "",
        instructions: "",
        creator: "",
        ingredientNumber: 0,
        r_and_d: true,
        mock_tags: [{
            tag: ""
        }],
        mock_ingreds: [{
            mocktail_id: null,
            measurement_id: "",
            ingredient_id: ""
        }],
        users_mocktails: [{
            mocktail_id: null,
            user_id: "",
        }]
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    renderMeasurementList = () => {
        return (
            this.props.measurementArray.map((measurement) => {
                return (
                    <option
                        key={measurement.id}
                        type=""
                        name="mock_ingred.measurement_id"
                        value={this.state.mock_ingreds.measurement_id}>
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
                        name="mock_ingred.intredient_id"
                        value={this.state.mock_ingreds.ingredient_id}>
                        {ingredient.name}
                    </option>
                )
            })
        )
    }

    renderTags = () => {
        return (
            this.props.tagArray.map((tag) => {
                return <button>{tag.tag}</button>
            })
        )
    }

    addIngredient = () => {
        this.setState({ ingredientNumber: this.state.ingredientNumber + 1 })
    }
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
    console.log(this.state.mock_ingreds)
    return (
        <div>
        <h2>Submit a new Mocktail</h2>
           <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                    <input
                    type="text"
                    name="name"
                    placeholder="mocktail name"
                    value={this.state.name}
                    onChange={this.changeHandler} />
            </label>
            <br />
            <label>
                Image:
                    <input
                    type="text"
                    name="image"
                    placeholder="image url"
                    value={this.state.image}
                    onChange={this.changeHandler} />
            </label>
            <br />
            <label>
                Glassware:
                    <input
                    type="text"
                    name="glassware"
                    placeholder="serving glass"
                    value={this.state.glassware}
                    onChange={this.changeHandler} />
            </label>
            <br />
            <label>
                Ingredients:
                    <br />
                <select
                    value={this.state.value}
                    onChange={this.changeHandler} >
                    {this.renderMeasurementList()}
                </select>
                <select
                    value={this.state.value}
                    onChange={this.changeHandler}>
                    {this.renderIngredientList()}
                </select>
            </label>

            <button onClick={this.renderMoreIngreds}>+ This button should render another measurement/ingredient dropdown+</button>
            <br />
            <label>
                Instructions:
                    <textarea type="text" value={this.state.instructions} onChange={this.changeHandler} />
            </label>
            <br />
            <label>Tag:
                    <br />
                {this.renderTags()}
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form> 
        </div>
        
    )
}
}

export default NewMocktailForm