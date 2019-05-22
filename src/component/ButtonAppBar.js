import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import HZ from '../image/Hz.png';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 20,
    marginRight: 20,
  },
};


function ButtonAppBar(props) {
  const { classes } = props;
  
  return (
    <div>
<div class="navbar-fixed">
  <nav>
    <div class="nav-wrapper">
    
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons"><Link to="home" style={{textDecoration:'none'}}>Ziel</Link></i></a>
      <ul id="nav-mobile" class="right">
        <li><Link to="home" style={{textDecoration:'none'}}>Home</Link></li>
        <li><Link to="profile" style={{textDecoration:'none'}}>Profile</Link></li>
        <li><Link to="portofolio" style={{textDecoration:'none'}}>Portofolio</Link></li>
        <li><Link to="kontak" style={{textDecoration:'none'}}>Contact</Link></li>
      </ul>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
  </div>       

</div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
