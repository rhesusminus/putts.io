import React from 'react'
import { Button } from 'react-onsenui'
import '../styles/ResultInput.css'

const Buttons = ({ handleClick, buttons }) =>
  buttons.map(b => (
    <Button id={`ResultInput__button_${b}`} modifier="outline" onClick={handleClick} key={b}>
      {b.toString()}
    </Button>
  ))

const GameInput = ({ handleClick }) => {
  const buttons = [0, 1, 2, 3, 4, 5]

  return (
    <div className="ResultInput">
      <Buttons handleClick={handleClick} buttons={buttons} />
    </div>
  )
}

export default GameInput
