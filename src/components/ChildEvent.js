import React from 'react'

function ChildEvent(props) {
    return (
        <>
            <div>ChildEvent</div>
            <button onClick={() => props.functionHandler('I am  data from child event component')}>Click in child</button>
        </>
    )
}

export default ChildEvent