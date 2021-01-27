import React from 'react'
import styled from 'styled-components'

class CardNote extends React.Component {
    state = {
        note: "",
        user_id: 1,
        users_mocktail_id: this.props.mocktailObject.users_mocktails[0].id
    }

    noteChangeHandler = (e) => {
        this.setState({ note: e.target.value })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        let noteObject = this.state
        console.log("in create submit", noteObject)
        this.props.noteSubmitHandler(noteObject)
    }

    renderNote = () => {
        return (
            this.props.notesArray.map((note) => {
                if (this.props.mocktailObject.id === note.users_mocktail.mocktail_id) {
                    return (
                        <div>
                            <p>{note.note}</p>
                            <button onClick={this.renderNoteWriter} >New Note</button>
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
                {this.renderNote()}
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