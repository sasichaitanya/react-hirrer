import React, { Component } from 'react'
import { Consumer } from './ContextDemo';

export class ContextApiDemoC extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <h>ContextApiDemoC</h>
        <p>Variable came through props drilling is : {this.props.name}</p>
        <Consumer>
          {
            (user) => {
              return <p>{JSON.stringify(user)}</p>
            }
          }
        </Consumer>
      </>
    )
  }
}

export default ContextApiDemoC