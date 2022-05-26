import React from 'react'

function CountForUseCallback({text , count}) {
    console.log(`Rendering ${text}`)
  return <div> {text} - {count} </div>
}

export default React.memo(CountForUseCallback)
