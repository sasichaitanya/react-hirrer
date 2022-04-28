import React from 'react'
import { Consumer } from './ContextDemo';


import ContextApiDemoC from './ContextApiDemoC'

function ContextApiDemoB(props) {
  return (
    <div>
      <p>ContextApiDemoB</p>
      <Consumer>
        {
          (user) => {
            return <p>{JSON.stringify(user)}</p>
          }
        }
      </Consumer>
      <ContextApiDemoC name ={props.name}/>
    </div>
  )
}

export default ContextApiDemoB