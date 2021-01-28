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
        let noteObject = { note: this.state.note, user_id: 1, users_mocktail_id: this.props.usersMocktailArray.id }
        console.log("in create submit", noteObject)
        this.props.noteSubmitHandler(noteObject)
        this.setState({ addNoteClick: false })
    }

    renderNote = () => {
        return (
            this.props.notesArray.map((note) => {
                console.log(note)
                console.log(this.props)
                if (this.props.mocktailObject.id === note.users_mocktail_id) {
                    return (
                        <div>
                            <p>{note.note} <button>Delete</button> </p>
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
                        <input
                            type="submit"
                            value="Submit" />
                    </div>
                </FormStyle>
            </div>
        )
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.addNoteClick ? this.renderNoteWriter() : this.renderNote()}
                <button onClick={() => this.setState({ addNoteClick: true })} >New Note</button>                
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