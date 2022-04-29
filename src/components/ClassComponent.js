import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'i am class component',
            location: 'Hyd',
            count: 1
        }
    }

    // increment = () => {
    //     // for immediate update, need to give as arrow callback 
    //     this.setState((prevState) => {
    //         return {
    //             count: prevState.count + 1 
    //         }
    //     })
    // }

    // incrementFive = () => {
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    //     this.increment()
    // }

    changeName = () => {
        // wrong way
        // this.state.name = "name changed"

        // for updating the state
        this.setState({
            name:  "name changed"
        })
        // this.setState({
        //     name:  "name changed1"
        // })
        // this.setState({
        //     name:  "name changed2"
        // })
        // this.setState({
        //     name:  "name changed3"
        // })
        // this.setState({
        //     name:  "name changed4"
        // })
        // this.setState((prevState) => {
        //     return {
        //         ...prevState,
        //         name:  "name changed"
        //     }
        // })
        // this.setState((prevState) => {
        //     return {
        //         ...prevState,
        //         name:  "name changed1"
        //     }
        // })
        // this.setState((prevState) => {
        //     return {
        //         ...prevState,
        //         name:  "name changed2"
        //     }
        // })
    }

    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <button onClick={() => this.changeName()}>Change the above name</button>
                <br/>
                {/* <div>Count :  {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button> */}
                <h1>Hi this is {this.props.name} from {this.state.location}</h1>
            </div>
        )
    }
}

export default ClassComponent

