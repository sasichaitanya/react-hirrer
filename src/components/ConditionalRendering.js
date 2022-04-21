import React, { Component } from 'react'

export class ConditionalRendering extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // if (this.state.isLoggedIn) {
        //     return (<div>I am logged in</div>)
        // } else {
        //     return (
        //         <div>I am not  logegd in</div>
        //     )
        // }

        // let message = this.state.isLoggedIn ? 'I am logged in' : 'I am not  logegd in'
        // return (
        //     <>
        //         <h3>Conditional Rendering</h3>
        //         <div>{message}</div>
        //     </>

        // )


        return this.state.isLoggedIn ? <div>'I am logged in'</div> : <div>'I am not logged in'</div> 
    }
}

export default ConditionalRendering