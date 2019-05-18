import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Progress from './Progress';

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
            <Typography className={classes.heading}>Description</Typography>
            <Typography className={classes.secondaryHeading}>Hi ! I'm a Web Designer and Back-End Developer...</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Nama saya adalah Elang Bayu Aji Hartanto, Nama saya adalah Elang Bayu Aji Hartanto, Nama saya adalah Elang Bayu Aji Hartanto, Nama saya adalah Elang Bayu Aji Hartanto
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Education</Typography>
            <Typography className={classes.secondaryHeading}>
            University Student at Universitas Gadjah Mada
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              2017 ~ Now at Universitas Gadjah Mada
              <hr></hr>
              2013 ~ 2016 at SMA N 1 Temanggung
              <hr></hr> 
              2010 ~ 2013 at SMP N 2 Temanggung
              <hr></hr> 
              2004 ~ 2010 at SD Muhammadiyah Parakan
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Skill</Typography>
            <Typography className={classes.secondaryHeading}>
              HTML, CSS, PHP, REACT, Laravel, C++
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <Progress></Progress>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Status</Typography>
            <Typography className={classes.secondaryHeading}>
Mahasiswa            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Probatio diabolica (Latin: "devil's proof", "diabolical proof") is a legal requirement to achieve an impossible proof. 
        Where a legal system would appear to require an impossible proof, the remedies are reversing the burden of proof, 
        or giving additional rights to the individual facing the probatio diabolica.            </Typography>
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
