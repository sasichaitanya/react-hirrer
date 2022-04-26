import React, { Component } from 'react'
import MemoComponent from './MemoComponent';
import PureComponentDemo from './PureComponent';

export class MemoPureParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'hello'
        }
    }

    changeName = () => {
        console.log('changeName button clicked')
        this.setState({
            name: 'hi'
        })
    }

    render() {
        return (
            <div>
                <PureComponentDemo name={this.state.name}/>
                <MemoComponent name={this.state.name}/>
                <button onClick={() => this.changeName()}>Click to change name</button>
            </div>
        )
    }
}

export default MemoPureParent