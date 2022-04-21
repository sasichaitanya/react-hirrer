import React from 'react'
import ChildEvent from './ChildEvent'

function ParentEvent() {

    const getChildData = (e) => {
        alert(e)
    }

    return (
        <>
            <div><b>ParentEvent</b></div>
            <ChildEvent functionHandler={getChildData} />
        </>
    )
}

export default ParentEvent