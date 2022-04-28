import React from 'react';
import ContextApiDemoB from './ContextApiDemoB';

function ContextApiDemoA(props) {
    return (
        <>
            <p>ContextApiDemoA</p>
            <ContextApiDemoB name = {props.name}/>
        </>
    )
}

export default ContextApiDemoA