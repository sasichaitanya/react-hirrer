import React, { Component } from 'react'
// custom hoc 
import HocDemo from './HocDemo'

export class HocDemoHover extends Component {
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
                <h3 onMouseOver={() => this.props.increment()}>Hover me: {this.props.count}</h3>
            </div>
        )
    }
}

export default HocDemo(HocDemoHover, 10)