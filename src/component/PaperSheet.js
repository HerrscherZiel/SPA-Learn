import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
        Name
          
          </Typography>
        <Typography component="p" >
        <br></br>
        
        Elang Bayu Aji Hartanto
        <hr></hr>
        <br>
        </br>
        
        </Typography>

        <Typography component="p">
        <br></br>
        
        <Typography variant="h5" component="h3">
       
        Date of Birth 
          
          </Typography>
          <br></br>
          14 November 1998
          <hr></hr>
        </Typography>

        <Typography component="p">
        <br></br>
        <Typography variant="h5" component="h3">
       
        Address
          
          </Typography>
          <br></br>
          Parakan, Temanggung, Central Java, Indonesia
          <hr></hr>
                  </Typography>
        

        

        
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
