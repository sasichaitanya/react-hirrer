import React from 'react'

function PropsChildrenExample(props) {
    return (
        <div>
            <p>PropsChildrenExample</p>
            <p>{props.children}</p>
        </div>
    )
}

export default PropsChildrenExample