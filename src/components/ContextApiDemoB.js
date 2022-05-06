import React from 'react'
import { ContextConsumer } from './ContextDemo';


import ContextApiDemoC from './ContextApiDemoC'

function ContextApiDemoB(props) {
  return (
    <div>
      <p>ContextApiDemoB</p>
      <ContextConsumer>
        {
          (user) => {
            return <p>{JSON.stringify(user)}</p>
          }
        }
      </ContextConsumer>
      <ContextApiDemoC name ={props.name}/>
    </div>
  )
}

export default ContextApiDemoB