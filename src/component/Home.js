import React from 'react';
import Me from '../image/me.jpeg';
import Grid from '@material-ui/core/Grid';


class Home extends React.Component{
    render(){
        return(

            <div className="container">
                
                <div className="row">
                
                    <div className="col s12">
                        <div className="col s5">
                            
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="col s12">

                        <div className="col s3">
                            <br></br>
                            <br></br>
                            <img src={Me} alt="me" class="circle responsive-img"/>
                        </div>
                       
                        <div className="col s7">
                        <br/>
                        <br/>
                        <div class="jumbotron">
                            <div class="jumbotron jumbotron-fluid">
                            
                                <h1 class="display-4">Fluid jumbotron</h1>
                                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                            
                            </div>
                            <Grid container justify="center" alignItems="center"><a class="btn btn-primary btn-lg" href="#" role="button">
                            Learn more</a> </Grid>
                        </div>
                            
                        </div>
                        
                        </div>   
                            
                    </div> 

                </div>
            
            </div>    
               
        )
    }
}

export default Home;