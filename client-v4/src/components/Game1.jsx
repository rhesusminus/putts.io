import React, { Component } from 'react'
import { GameDisplay, ResultInput } from './'
import '../styles/Game1.css'

class Game1 extends Component {
  state = {
    distance: '10 m',
    result: '4 / 20',
    input: null
  }

  handleResultInputClick = event => {
    this.setState({ input: event.target.innerHTML })
  }

  render() {
    const { distance, result, input } = this.state

    return (
      <div className="Game1">
        <GameDisplay distance={distance} result={result} input={input} />
        <ResultInput handleClick={this.handleResultInputClick} />
      </div>
    )
  }
}

export default Game1
