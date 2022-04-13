import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ClassComponent',
            count: 1
        }
    }

    increment = () => {
        // for immediate update, need to give as arrow function
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 
            }
        })
    }

    incrementFive = () => {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    changeName = () => {
        // for updating the state
        this.setState({
            name: 'Class component name updated'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <button onClick={() => this.changeName()}>Change the above name</button>
                <br/>
                <div>Count :  {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default ClassComponent

