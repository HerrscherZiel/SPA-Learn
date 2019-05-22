import React, {Component} from 'react';
import axios from 'axios';
import HZ from '../image/Hz.png';
import wos from '../image/wos.gif';
import Grid from '@material-ui/core/Grid';



class Portofolio extends React.Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/HerrscherZiel/product_react_api/persons`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    
      render() {
        return (
            

          
          <div className="container">
            <div className="row">

            
            <Grid container justify="center" alignItems="center">
            <div className="col s12 m12 l12 welcome">
                              <div class="jumbotron jumbotron-fluid">                            
                                <h1 class="display-6" color="whitesmoke" style={{ fontWeight:"bold",textShadow:"3px 3px black"}}>My Portofolio</h1>
                                <hr className="hrr"></hr>
                            </div>
                            
           <ul>
                      <div className= "col s12 m12 l12">
                      { this.state.persons.map(person =>
                      
                          <div class="col s12 m12 l6">
                              <div class="card-panel 1 z-depth-1">
                                  <div class="row valign-wrapper">
                                      <div class="col s6">
                                      <Grid container justify="center" alignItems="center"><img src={wos} alt="" class="responsive-img" width="250px"></img></Grid>
                                      </div>
                                  <div class="col s12 m12 l6">
                                      <span class="black-text">
                                          <p class="lead" style={{fontWeight:"bold"}}>{person.name}</p>
                                      </span>
                                      <span class="black-text">
                                      <hr></hr>
                                          <p>{person.desc}</p>
                                      </span>
                                  </div>
                              </div>
                          </div>
                          </div>)}
                          </div>
          </ul>
          
          </div>    
          </Grid> 
            </div>
            </div>


        )
      }
    }
    

export default Portofolio;