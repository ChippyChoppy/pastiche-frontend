import React from 'react'

class NewMocktailForm extends React.Component {

    state = {
        name: "",
        image: "",
        glassware: "",
        instructions: "",
        about: "",
        creator: "",
        mock_tags: [{

        }],
        mock_ingreds: [{

        }],
        users_mocktails: [{

        }]
    }

    renderMeasurementList = () => {
        return (
            this.props.measurementArray.map((measurement) => {
                return <option key={measurement.id}> {measurement.imperial} / {measurement.metric} </option>
            })
        )
    }

    renderIngredientList = () => {
        return (
            this.props.ingredientArray.map((ingredient) => {
                return <option key={ingredient.id}> {ingredient.name}</option>
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

    moreIngredsClickHandler(e) {
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



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Image:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Glassware:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    About:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Ingredients:
                    <br />
                    <select>
                        {this.renderMeasurementList()}
                    </select>
                    <select value={this.state.value} onChange={this.handleChange} >
                        {this.renderIngredientList()}
                    </select>

                </label>
                <button onClick={this.moreIngredsClickHandler}>+ This button should render another measurement/ingredient dropdown+</button>
                <br />
                <label>
                    Instructions:
                    <textarea type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <br />
                <label>Tag:
                    <br />
                    {this.renderTags()}
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NewMocktailForm