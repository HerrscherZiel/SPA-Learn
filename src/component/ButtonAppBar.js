import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

    <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
     
    <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
        <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
        
            <a class="mdl-navigation__link" ><Link to="/home">Home</Link></a>
            <a class="mdl-navigation__link" ><Link to="/profile">Profile</Link></a>
            <a class="mdl-navigation__link" ><Link to="/portofolio">Portfolio</Link></a>
            <a class="mdl-navigation__link" ><Link to="/kontak">Contact</Link></a>
        </nav>
    </div>
</header>
>
</div>
</div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
