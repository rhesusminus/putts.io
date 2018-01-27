import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import '../css/GameInfo.css';

const GameInfo = props => {
  const { title, desc } = props;

  return (
    <div className="GameInfo">
      <Typography type="title">{title}</Typography>
      <br />
      <Typography type="body1">{desc}</Typography>
    </div>
  )
};

GameInfo.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string
}

GameInfo.defaultProps = {
  desc: ''
}

export default GameInfo;
