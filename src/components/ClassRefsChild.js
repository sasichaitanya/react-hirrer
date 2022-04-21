import React, { Component } from 'react'

export class ClassRefsChild extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.headingRef = React.createRef()
    }

    changeFocus = () => {
        this.inputRef.current.focus()
        // this.headngRef.current.style.color = "red"
    }

    render() {
        return (
            <div>
                <h3 ref={this.headingRef}>Ref child</h3>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.changeFocus}>Change Focus</button>
            </div>
        )
    }
}

export default ClassRefsChild