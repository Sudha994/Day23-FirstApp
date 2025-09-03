import React from 'react'

const Sixth = () => {
    // const flowers = ['rose', 'lily', 'sunflower', 'daisy', 'tulip'];

    const flowers = []
  return (
    <div>
        <h2>Conditional + Looping</h2>
        {flowers.length>0 ?(
        <ul>
            {flowers.map((flower, index) => (
                <li key={index}>{flower}</li>
                ))}
        </ul>
        ): (
            <p>No flowers Availabe</p>
        )
    }
    </div>
  )
}

export default Sixth