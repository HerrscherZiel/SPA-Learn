import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function InsetDividers(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        
        <ListItemText primary="Nama" secondary="Elang Bayu Aji Hartanto" />
      </ListItem>
      <li>
        <Divider variant="inset" />
      </li>
      <ListItem>
        
        <ListItemText primary="Tanggal Lahir" secondary="November 14, 1998" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>

        <ListItemText primary="Alamat" secondary="Temanggung, Central Java" />
      </ListItem>
    </List>
  );
}

InsetDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetDividers);
