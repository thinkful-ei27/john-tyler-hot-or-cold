import React, { Component } from 'react'
import Feedback from './components/Feedback';
import Form from './components/Form';
import Count from './components/Count';
import Guesses from './components/Guesses';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: 'Make a guess!',
            currentGuess: 50,
            secretGuess: Math.floor(Math.random()*100)+1,
            guesses: Array(9).fill(Math.floor(Math.random()*100)+1)
        }
    }
  render() {
      const guesses = this.state.guesses;
    return (
        <main className="container center">
            <header>
                <h1>Hot or Cold</h1>
            </header>
            <Feedback feedback={this.state.feedback}/>
            <Form />
            <Count guesses={guesses}/>
            <Guesses guesses={guesses}/>
            <button>New Game?</button>
        </main>
    )
  }
}
