import React from 'react'

function HeroComponent(props) {
    if (props.name === 'joker') {
        throw new Error()
    }
  return (
    <div>HeroComponent:  {props.name}</div>
  )
}

export default HeroComponent