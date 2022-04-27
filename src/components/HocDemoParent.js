import React from 'react'
import HocDemoClick from './HocDemoClick';
import HocDemoHover from './HocDemoHover';

function HocDemoParent() {
    return (
        <div>
            <HocDemoClick />
            <HocDemoHover />
        </div>
    )
}

export default HocDemoParent