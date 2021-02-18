import React from 'react'
import styled from 'styled-components'

class CardNote extends React.Component {
    state = {
        note: "",
        user_id: 1,
        users_mocktail_id: "",
        addNoteClick: false
    }

    noteChangeHandler = (e) => {
        this.setState({ note: e.target.value  })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        const variable = this.props.usersMocktailArray.find((mocktail) =>
            mocktail.mocktail_id === this.props.mocktailObject.id
        )
        console.log(variable)
        let noteObject = { note: this.state.note, user_id: 1, users_mocktail_id: variable.id }
        console.log("in create submit", noteObject)
        this.props.noteSubmitHandler(noteObject)
        this.setState({ addNoteClick: false })
    }

    renderNote = () => {
        return (
            this.props.notesArray.map((note) => {
                console.log(note)
                console.log(this.props)
                if (this.props.mocktailObject.id === note.users_mocktail.mocktail_id) {
                    return (
                        <div>
                            <p>{note.note} <Button>X</Button> </p>
                        </div>
                    )
                }
            })
        )
    }

    renderNoteWriter = () => {
        return (
            <div>
                <h4>Notes:</h4>
                <FormStyle
                    onSubmit={this.localSubmitHandler} >
                    <TextAreaStyle
                        name="note"
                        value={this.state.note}
                        onChange={this.noteChangeHandler} />
                    <div>
                        <Input
                            type="submit"
                            value="Submit" />
                    </div>
                </FormStyle>
            </div>
        )
    }

    render() {
        console.log(this.props.mocktailObject.users_mocktails)
        return (
            <div>
                {this.state.addNoteClick ? this.renderNoteWriter() : this.renderNote()}
                <Button onClick={() => this.setState({ addNoteClick: true })} >New Note</Button>                
            </div>
        )
    }
}

{/* <h4>Notes:</h4>
                <FormStyle onSubmit={this.localSubmitHandler} >
                    <TextAreaStyle name="note" value={this.state.note} onChange={this.noteChangeHandler} />
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </FormStyle> */}
export default CardNote

const TextAreaStyle = styled.textarea`
    justify-content: center;
    object-fit: contain;
    width: 250px;
    height: 200px;
`

const FormStyle = styled.form`
    justify-content: center;
`

const Button = styled.button `
    background: #900551;
    color: #fefbfa;
    height: 40px;
    border: 3px solid #fec196;
    border-style: outset;
    margin: 15px 10px 15px 0px;
    box-shadow: 0px 0px 15px 4px #d9919a;
    :hover {
        background: #052b38;
    }
`

const Input = styled.input `
    background: #900551;
    color: #fefbfa;
    height: 40px;
    border: 3px solid #fec196;
    border-style: outset;
    margin: 15px 10px 15px 0px;
    box-shadow: 0px 0px 15px 4px #d9919a;
    :hover {
        background: #052b38;
    }
`