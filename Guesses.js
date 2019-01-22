import React from 'react'
import './Guesses.css';

function Guesses(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));
  return (
    <div className="guessBox clearfix">
      <ul>
          {guesses}
      </ul>
    </div>
  )
}

export default Guesses
