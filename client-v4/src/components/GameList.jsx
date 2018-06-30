import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchGames, selectGame } from '../actions'
import { List, ListItem, ListHeader } from 'react-onsenui'

class GameList extends Component {
  static defaultProps = {
    list: []
  }

  componentDidMount() {
    this.props.fetchGames()
  }

  handleGameClick = id => {
    this.props.selectGame(id)
    this.props.navigate(`game/${id}`)
  }

  renderRow = ({ id, name }) => (
    <ListItem key={id} onClick={() => this.handleGameClick(id)}>
      {name}
    </ListItem>
  )

  render() {
    return (
      <List
        dataSource={this.props.list}
        renderRow={this.renderRow}
        renderHeader={() => <ListHeader>Available games</ListHeader>}
      />
    )
  }
}

GameList.propTypes = {
  fetchGames: PropTypes.func.isRequired,
  selectGame: PropTypes.func.isRequired,
  list: PropTypes.array
}

const mapStateToProps = ({ games }) => ({ list: games.list })

export default connect(
  mapStateToProps,
  { fetchGames, selectGame }
)(GameList)
