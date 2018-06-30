import React from 'react'
import { Button } from 'react-onsenui'
import '../styles/ResultInput.css'

const Buttons = ({ handleClick, buttons }) =>
  buttons.map(b => (
    <Button modifier="outline" onClick={handleClick} key={b}>
      {b.toString()}
    </Button>
  ))

const GameInput = ({ handleClick }) => {
  const buttons = [0, 1, 2, 3, 4, 5]

  return <Buttons handleClick={handleClick} buttons={buttons} />
}

export default GameInput
