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
            currentGuess: '',
            secretGuess: Math.floor(Math.random()*100)+1,
            guesses: []
        }
        this.onGuessChange = this.onGuessChange.bind(this);
        this.setGuess = this.setGuess.bind(this);
        this.startNewGame = this.startNewGame.bind(this);
    }

    giveFeedback(n) {
        const secretGuess = this.state.secretGuess;
        const fb = (r) => this.setState({feedback: r});
        return (secretGuess - n === 0) ? fb('Winner!')
        : (secretGuess - n < 10) ? fb('Hot!')
        : (secretGuess - n < 20) ? fb('Kinda hot')
        : (secretGuess - n < 30) ? fb('Warm')
        : fb('Cold as ice');
    }

    onGuessChange(currentGuess) {
        this.setState({currentGuess});
    }

    setGuess() {
        const currentGuess = this.state.currentGuess;
        // this.setState({currentGuess});
        this.giveFeedback(currentGuess);
        this.setState({guesses: [...this.state.guesses, currentGuess]})
    }

    startNewGame() {
        this.setState({
            feedback: 'Make a guess!',
            currentGuess: '',
            secretGuess: Math.floor(Math.random()*100)+1,
            guesses: []
        });
    }

  render() {
    const {guesses, feedback} = this.state;
    return (
        <main className="container center">
            <header>
                <h1>Hot or Cold</h1>
            </header>
            <Feedback feedback={feedback}/>
            <Form 
                onGuessChange={this.onGuessChange}
                setGuess={this.setGuess}
            />
            <Count guesses={guesses}/>
            <Guesses guesses={guesses}/>
            <button onClick={this.startNewGame}>New Game?</button>
        </main>
    )
  }
}
