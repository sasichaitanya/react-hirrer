import React from 'react'

function MemoComponent(props) {
    console.log('i am in memo component')
    return (
        <div>MemoComponent  <b>{props.name}</b></div>
    )
}

// predefined hoc
export default React.memo(MemoComponent)