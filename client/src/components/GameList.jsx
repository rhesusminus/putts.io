import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import List from 'material-ui/List';
import { GameInfo } from './';
import { fetchGames } from '../actions/games-actions';

const styles = theme => ({
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

class GameList extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    const { gamesList, classes } = this.props;

    return (
      <div className="GameList">
        <Typography type="title" className={classes.title}>
          Available games
        </Typography>
        <div className={classes.demo}>
          <List>{gamesList.map(game => <GameInfo {...game} key={game.id} />)}</List>
        </div>
      </div>
    );
  }
}

GameList.propTypes = {
  fetchGames: PropTypes.func.isRequired,
  gamesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ games }) => ({ gamesList: games.gamesList });
const mapDispatchToProps = dispatch => bindActionCreators({ fetchGames }, dispatch);

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(GameList));
