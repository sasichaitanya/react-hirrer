import React, { Component } from 'react'
// custom hoc 
import HocDemo from './HocDemo'

export class HocDemoClick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // count: 0
        }
    }

    // incrementCount = () => {
    //     this.setState((prevState) => {
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <p>Count is : {this.props.count}</p>
                <button onClick={() => this.props.increment()}>Click me</button>
            </div>
        )
    }
}

export default HocDemo(HocDemoClick, 5)