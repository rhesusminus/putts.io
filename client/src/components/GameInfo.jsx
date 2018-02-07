import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';

const styles = () => ({
  gameListItem: {
    paddingLeft: 0,
  },
});

const GameInfo = props => {
  const { title, desc, classes } = props;

  return (
    <ListItem className={classes.gameListItem}>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={desc} />
    </ListItem>
  );
};

GameInfo.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  desc: PropTypes.string,
};

GameInfo.defaultProps = {
  desc: '',
};

export default withStyles(styles)(GameInfo);
