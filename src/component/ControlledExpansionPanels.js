import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Deskripsi</Typography>
            <Typography className={classes.secondaryHeading}>Hi ! Aku adalah seorang praktisi Front-End dan Back-End Developer</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nama saya adalah Elang Bayu Aji Hartanto, saat ini saya sedang berkuliah di Universitas Gadjah Mada. 
              Saya merupakan mahasiswa semester 4 program studi Komputer dan Sistem Informasi.
              Saya belajar mempraktikan hal yang saya dapatkan dari kuliah untuk menjadi Front-End dan Back-End Developer 
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Edukasi</Typography>
            <Typography className={classes.secondaryHeading}>
            Mahasiswa Universitas Gadjah Mada
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{display: 'block'}}>
            <Typography>
              2017 ~ Sekarang di Universitas Gadjah Mada
              <hr></hr>
              2013 ~ 2016 di SMA N 1 Temanggung
              <hr></hr> 
              2010 ~ 2013 di SMP N 2 Temanggung
              <hr></hr> 
              2004 ~ 2010 di SD Muhammadiyah Parakan
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Keahliaan</Typography>
            <Typography className={classes.secondaryHeading}>
              HTML, CSS, PHP, Paint Tool Sai, Premiere
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{display: 'block'}}>
            
              
              <Typography>HTML </Typography>
                    <div class="progress">
                        <div class="determinate" style={{width: '70%'}}></div>
                    </div>
                    <br></br>
                    <Typography>CSS </Typography>
                    <div class="progress">
                        <div class="determinate" style={{width: '70%'}}></div>
                    </div>
                    <br></br>
                    <Typography>PHP </Typography>
                    <div class="progress">
                        <div class="determinate" style={{width: '60%'}}></div>
                    </div>
                    <br></br>
                  
                    <Typography>Paint Tool Sai</Typography>
                    <div class="progress">
                        <div class="determinate" style={{width: '80%'}}></div>
                    </div>
                    <br></br>
                    
                    <Typography>Premiere </Typography>
                    <div class="progress">
                        <div class="determinate" style={{width: '50%'}}></div>
                    </div>
                    <br></br>
                    
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Hobi dan Interest</Typography>
            <Typography className={classes.secondaryHeading}>
Gaming, Menulis, Membaca, dan Menggambar            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
           Saya biasanya menghabiskan waktu saya dengan bermain game bersama teman saya untuk menghilangkan kepenatan kehidupan sehari-hari, selain itu saya juga menyukai menggambar 
           dan menulis sesuatu ketika saya tidak memiliki mood untuk bermain game juga membaca sesuatu untuk mengisi waktu</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
