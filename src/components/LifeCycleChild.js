import React, { Component } from 'react'

export class LifeCycleChild extends Component {
    constructor(props) {
        console.warn('I am in child constructor')
        super(props)
        this.state = {
           
        }
    }

    // mounting
    static getDerivedStateFromProps(prevProps, prevState) {
        console.warn('I am in child getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.warn('I am in child componentDidMount')
    }



    // updating phase
    shouldComponentUpdate() {
        console.warn('I am in child shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.warn('I am in child getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.warn('I am in child componentDidUpdate')
    }


    render() {
        console.warn('I am in child render')
        return (
            <>
                <p>I am child component</p>
            </>
        )
    }
}

export default LifeCycleChild




// Mounting  : 
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



// Unmounting (destroying)
// componentWillUnmount()
