import React from 'react'

function Count(props) {
  return (
    <div className="count">
      <p>Number of guesses: {props.guesses.length}</p>
    </div>
  )
}

export default Count
