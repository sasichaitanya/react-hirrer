import React, { Component } from 'react'

class DestructureClass extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        const { one, two } = this.props
        
        return (
            <div>Destructure Class {one} {two}</div>
        )
    }
}

export default DestructureClass