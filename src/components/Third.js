import React from 'react'
const displayBlock1 = true;
const displayBlock2 = false;

const Third = () => {
  return (
    <div>
        {displayBlock1 && <h1>I am Block1</h1>}
        {displayBlock2 && <h2>I am Block2</h2>}
    </div>
  )
}

export default Third