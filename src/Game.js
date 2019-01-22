import React, { Component } from 'react'
import Feedback from './components/Feedback';
import Form from './components/Form';
import Count from './components/Count';
import Guesses from './components/Guesses';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            feedback: 'Make a guess!',
            currentGuess: '',
            error: '',
            secretGuess: Math.floor(Math.random()*100)+1,
            guesses: []
        };
        this.state = this.initialState;
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
        this.setState({currentGuess}, this.validateGuess(currentGuess));
    }

    validateGuess(g) {
        const guesses = this.state.guesses;
        const ss = (obj) => this.setState(obj);
        
        const valid = {
            error: '',
            formIsValid: true
        }

        const nanError = {
            error: '*You must enter a number',
            formIsValid: false
        }

        const outOfRangeError = {
            error: '*Number must be between 1 and 100',
            formIsValid: false
        }

        const alreadyGuessedError = {
            error: '*You already guessed this number',
            formIsValid: false
        }
        return (isNaN(g)) ? ss(nanError)
        : (g < 1 || g > 100) ? ss(outOfRangeError)
        // : (guesses.length > 1 && guesses.findIndex(g) > -1) ? ss(alreadyGuessedError)
        : ss(valid)
    }

    setGuess() {
        if (this.state.formIsValid) {
            const currentGuess = this.state.currentGuess;
            this.giveFeedback(currentGuess);
            this.setState({guesses: [...this.state.guesses, currentGuess]})
        }

    }

    startNewGame() {
        this.setState(this.initialState);
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
                error={this.state.error}
            />
            <Count guesses={guesses}/>
            <Guesses guesses={guesses}/>
            <button onClick={this.startNewGame}>New Game?</button>
        </main>
    )
  }
}
