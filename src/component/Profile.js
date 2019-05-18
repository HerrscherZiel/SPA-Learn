import React, {Component} from 'react';
import ControlledExpansionPanels from './ControlledExpansionPanels';
import Grid from '@material-ui/core/Grid';
import Me from '../image/me.jpeg';
import InsetDividers from './InsetDividers';


class Profile extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12">
                
                    <div className="col s4">
                        
                                <div className="card-panel">
                                <Grid container justify="center" alignItems="center"><img src={Me} alt="me" class="circle responsive-img" width="50%"/>
                                <br></br><InsetDividers></InsetDividers></Grid>
                                   
                                  
                                    

                                </div>
                    </div>  
                            <div className="col s8">
                        
                            <div>
                                
                            <div className="col s11">
                            <div className="card-panel">
                            <p align="center"><h3>Profile</h3></p>
                                <ControlledExpansionPanels></ControlledExpansionPanels>
                                </div>
                            </div>
                                
                            </div>
                            </div>
                        
                    </div>
                </div>
            
        );
    }
}

export default Profile;