import React from 'react'

const Fifth = () => {
    const isAdmin = true;

  return (
    <div>
        <h2>Ternery Example</h2>
        <p>Admin: {isAdmin ? 'You are an Admin' : 'You are a Guest'}</p>
    </div>
  )
}

export default Fifth