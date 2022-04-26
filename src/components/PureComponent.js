import React, { PureComponent } from 'react'

export class PureComponentDemo extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('i am in pure component')
        return (
            <div>PureComponent <b>{this.props.name}</b></div>
        )
    }
}

export default PureComponentDemo