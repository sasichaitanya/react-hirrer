import React, { Component } from 'react'
import LifeCycleChild from './LifeCycleChild';

export class LifeCycleParent extends Component {
    constructor(props) {
        console.log('I am in parent constructor')
        super(props)
        this.state = {
            name: 'hello'
        }
    }

    // mounting
    static getDerivedStateFromProps(prevProps, prevState) {
        console.log('I am in parent getDerivedStateFromProps')
        // here u need to return updated state or null
        return null
    }

    componentDidMount() {
        console.log('I am in parent componentDidMount')
    }



    // updating phase
    shouldComponentUpdate() {
        console.log('I am in parent shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('I am in parent getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('I am in parent componentDidUpdate')
    }




    changeName = () => {
        this.setState({
            name: 'Name changed'
        })
    }

    render() {
        console.log('I am in parent render')
        return (
            <>
                <div>Name is : {this.state.name}</div>
                <button onClick={() => this.changeName()}>Click me</button>
                <LifeCycleChild />
            </>
        )
    }
}

export default LifeCycleParent




// Mounting / initializing : 
// constructor() => state init
// static getDerivedStateFromProps() => no access to this, it should return updated state or null
// render() => 
// componentDidMount() => api calls here 


// Updating  
// static getDerivedStateFromProps()
// shouldComponentUpdate() => manually control update, should return true/false
// render()
// getSnapshotBeforeUpdate() => 
// componentDidUpdate()



// Unmounting / destroying
// componentWillUnmount()
