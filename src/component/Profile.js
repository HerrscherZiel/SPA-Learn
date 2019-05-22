import React, {Component} from 'react';
import ControlledExpansionPanels from './ControlledExpansionPanels';
import Grid from '@material-ui/core/Grid';
import Me from '../image/me.jpeg';
import InsetDividers from './InsetDividers';
import { CSSTransitionGroup } from 'react-transition-group';


const Profile = () =>{
        return (
            <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>

            <div className="row">

            <Grid container justify="center" alignItems="center">
                            
                            <div className="col s12 m12 l12">
                            <div class="jumbotron">
                            
                                <h1 class="display-3" style={{color:"whitesmoke", textShadow:"3px 3px black"}}>My Profile</h1>
                                
                            </div>
                            </div>
            </Grid>    
                <div className="col s12">
                            
                
                            <div className="col s12 m3 s3">
                                
                                        <div className="card-panel">
                                        <Grid container justify="center" alignItems="center"><img src={Me} alt="me" class="circle responsive-img" width="50%"/>
                                        <br></br><InsetDividers></InsetDividers></Grid>
                                        </div>
                            </div>  

                            <div className="col s12 m9 l9">
                        
                            <Grid container justify="center" alignContent="center">        
                                <div className="col s12 m12 l12">
                                    <div className="card-panel">
                                    <p align="center"><h3>A Little About Me</h3></p>
                                        <ControlledExpansionPanels></ControlledExpansionPanels>
                                    </div>
                                </div>
                                </Grid>    

                            </div>

                           
                        
                    </div>
                </div>
            </CSSTransitionGroup>
        );
    }

export default Profile;