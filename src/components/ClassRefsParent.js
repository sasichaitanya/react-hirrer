import React, { Component } from 'react'
import ClassRefsChild from './ClassRefsChild';

export class ClassRefsParent extends Component {

    constructor(props) {
        super(props)
        this.componentRef = React.createRef()

    }

    childAccess = () => {
        this.componentRef.current.changeFocus()
        // this.componentRef.current.headingRef.current.style.color = "red"

    }

    render() {
        return (
            <div>
                <ClassRefsChild ref={this.componentRef} />
                <br/>
                <button onClick={() => this.childAccess()}>Click in parent</button>
            </div>
        )
    }
}

export default ClassRefsParent