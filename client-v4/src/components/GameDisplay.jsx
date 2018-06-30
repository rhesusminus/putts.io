import React from 'react'

const Input = ({ input }) => <div className="ResultDisplay__main">{input}</div>
const Distance = ({ distance }) => <div className="ResultDisplay__helper-distance">{distance}</div>
const Result = ({ result }) => <div className="ResultDisplay__helper-result">{result}</div>

const GameDisplay = ({ input, result, distance }) => {
  return (
    <div className="GameDisplay">
      <Input input={input} />
      <div className="GameDisplay__helper">
        <Distance distance={distance} />
        <Result result={result} />
      </div>
    </div>
  )
}

export default GameDisplay
