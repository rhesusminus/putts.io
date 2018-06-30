import React, { Component } from 'react'
import { Button } from 'react-onsenui'

class GameDetails extends Component {
  render() {
    return (
      <div className="GameDetails">
        <div className="GameDetails__header">
          <h1>name</h1>
        </div>
        <div className="GameDetails__desc">
          longDesc
          <Button modifier="large" onClick={() => console.log('naak!')}>
            START GAME
          </Button>
        </div>
      </div>
    )
  }
}

export default GameDetails
