import React from 'react'
import styled from 'styled-components'

class CardNote extends React.Component {
    state= {
        note: ""
    }
    
    noteChangeHandler = (e) => {
        this.setState({note: e.target.value})
    }

    localSubmitHandler

    render() {
        console.log(this.props)
        return (
            <div>
                <p>this is a note</p>
                <form>
                    <textarea name="note" value={this.state.note} onChange={this.noteChangeHandler} />
                    <div>
                        <input className="button" type="submit" value="Save" />
                    </div>
                </form>
            </div>

        )
    }
}

export default CardNote