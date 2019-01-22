import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onGuessChange(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setGuess();
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>
          Enter a guess: <br />
          <input 
            type="text"
            // value={this.props.currentGuess}
            onChange={this.handleChange}
          />
          <div>{this.props.error}</div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


// function Form(props) {
//   let inputValue;
//   const handleSubmit = e => {
//     e.preventDefault();
//     props.setGuess(inputValue.value);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//           Enter a guess: <br />
//           <input 
//             type="text" 
//             ref={input => inputValue = input}
//             // onChange={}
//           />
//       </label>
//       <input type="submit" value="Submit"></input>
//     </form>
//   )
// }

// export default Form
