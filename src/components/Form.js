import React from 'react'

function Form(props) {
  let inputValue;
  const handleSubmit = e => {
    e.preventDefault();
    props.setGuess(inputValue.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
          Enter a guess: <br />
          <input 
            type="text" 
            ref={input => inputValue = input}
            // onChange={}
          />
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  )
}

export default Form
