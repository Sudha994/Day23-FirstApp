import React from 'react'
import './First.css'
// const divStyle = {} = {
//     color:'red'
// }

const message="Creating the First Component";
const items = ['Pen','Book','Table','Board','Bottle']

const First = () => {
  return (
    // <div style={divStyle}>
    <div className='container'>
        <h1 id='myId'> {message.toUpperCase()}</h1>
        <p>Welcome to Landing page of my Application</p>
        <select value={"coconut"}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option  value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>

        <ol>
            {items.map((item, index) => (
                <li key="{index}">{item}</li>
            ))}
        </ol>
    </div>
  )
}

export default First