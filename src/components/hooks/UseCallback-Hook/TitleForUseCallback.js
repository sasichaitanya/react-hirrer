import React from "react";

function TitleForUseCallback(){
    console.log('Rendering Title')
    return(
        <h2>
            UseCallback Hook
        </h2>
    )
}
 export default  React.memo(TitleForUseCallback)