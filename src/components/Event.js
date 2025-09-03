import React from 'react'

const Event = () => {
  return (
    <div>
        <h1>Adding Events to Elements</h1>
        <button id="myId" onClick={event => alert("Hello World!")}>Click Here</button>
    </div>
  )
}

export default Event