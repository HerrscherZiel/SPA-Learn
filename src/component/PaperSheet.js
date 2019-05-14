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
          Profile
          <hr></hr>
          </Typography>
        <Typography component="p">
        <br></br>
        
        Saya adalah mahasiswa D3 Komputer dan Sistem Informasi, Sekolah Vokasi, Universitas Gadjah Mada. Saya tertarik untuk menjadi seorang Web Developer. Pada dasarnya saya adalah orang yang siap untuk bekerja keras, bertanggung jawab, tekun, dan amanah dalam mengemban tugas.
        
        </Typography>

        <Typography component="p">
        <br></br>
        In essence, the opposing statement's lack of proof makes the statement true in some sense. This connects with the idea that, 
        while substantial evidence may prove the devil's existence, there is no evidence that denies the devil's existence; 
        therefore, one cannot deny the devil's existence.
        <hr></hr>
        <Typography variant="h5" component="h3">
          The Probatio Diabolica
          <hr></hr>
          </Typography>
        </Typography>
        <Typography component="p">
        <br></br>
        For example, one party might patent a process for manufacturing an item. 
        Another party might then make the item. The patent-holder would normally have to show that the patented process had been improperly used; this is a probatio diabolica, 
        since, on the face of it, the patent-holder can't prove which process was actually used, which could render the patent useless. Two possible solutions exist:
        </Typography>
        
        <Typography component="p">
        <br></br>
        the burden of proof is reversed by presuming that the second manufacturer has improperly used the patented process, 
        unless he/she demonstrates that he/she has used some other process; or
        the patent-holder is given discovery rights, enabling him/her to obtain information from the second manufacturer on the process actually used
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
