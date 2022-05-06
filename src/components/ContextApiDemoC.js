import React, { Component } from 'react'
import { ContextConsumer } from './ContextDemo';

export class ContextApiDemoC extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <h>ContextApiDemoC</h>
        <p>Variable came through props drilling is : {this.props.name}</p>
        <ContextConsumer>
          {
            (user) => {
              return <p>{JSON.stringify(user)}</p>
            }
          }
        </ContextConsumer>
      </>
    )
  }
}

export default ContextApiDemoC