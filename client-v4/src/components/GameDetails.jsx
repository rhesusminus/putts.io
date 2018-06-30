import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeToolbarType, changeToolbarTitle } from '../actions'
import { Button } from 'react-onsenui'
import '../styles/GameDetails.css'

class GameDetails extends Component {
  componentDidMount() {
    this.props.changeToolbarTitle(this.props.game.name)
    this.props.changeToolbarType('game')
  }
  render() {
    const { name, longDesc } = this.props.game

    return (
      <div className="GameDetails">
        <div className="GameDetails__header">
          <h1>{name}</h1>
        </div>
        <div className="GameDetails__desc">
          {longDesc}
          <Button modifier="large" onClick={() => console.log('naak!')}>
            START GAME
          </Button>
        </div>
      </div>
    )
  }
}

GameDetails.propTypes = {
  game: PropTypes.object.isRequired
}

const mapStateToProps = ({ games }) => {
  const game = games.list.filter(game => game.id === games.selectedGame)

  return { game: game[0] }
}

export default connect(
  mapStateToProps,
  { changeToolbarType, changeToolbarTitle }
)(GameDetails)
