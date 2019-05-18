import React, {Component} from 'react';
import axios from 'axios';
import HZ from '../image/Hz.png';
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
            <div className="col s12 m12 l12 welcome blue-grey lighten-5 z-depth-3">
                              <div class="jumbotron jumbotron-fluid">                            
                                <h1 class="display-4">Fluid jumbotron</h1>
                            </div>
                            
           <ul>
            { this.state.persons.map(person =>
                <div class="col s6">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row valign-wrapper">
                            <div class="col s6">
                            <Grid container justify="center" alignItems="center"><img src={HZ} alt="" class="responsive-img" width="150px"></img></Grid>
                            </div>
                        <div class="col s6">
                            <span class="black-text">
                                <p class="lead">{person.id}</p>
                            </span>
                            <span class="black-text">
                            <hr></hr>
                                <p class="lead">{person.name}</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>)}
          </ul>
          
          </div>    
          </Grid> 
            </div>
            </div>


        )
      }
    }
    // render() {
    //     return (
    //         <div>
    //           <main>
                
    


    //             <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
    //                 <div class="mdl-card__media">
    //                     <img class="article-image" src={Bg} border="0" alt=""></img>
    //                 </div>
    //                 <div class="mdl-card__title">
    //                     <h2 class="mdl-card__title-text">Sistem Informasi OkeAja</h2>
    //                 </div>
    //                 <div class="mdl-card__supporting-text">
    //                    Sistem Informasi Pariwisata OkeAja
    //                 </div>
    //                 <div class="mdl-card__actions mdl-card--border">
    //                     <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#">Read more</a>
    //                 </div>
    //             </div>
                
    //             <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
    //                 <div class="mdl-card__media">
    //                     <img class="article-image" src={Bg} border="0" alt=""></img>
    //                 </div>
    //                 <div class="mdl-card__title">
    //                     <h2 class="mdl-card__title-text">Sistem Informasi Seminar</h2>
    //                 </div>
    //                 <div class="mdl-card__supporting-text">
    //                     Sistem Informasi Seminar
    //                 </div>
    //                 <div class="mdl-card__actions mdl-card--border">
    //                     <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="#">Read more</a>
    //                 </div>
    //             </div>

  


    //         </div>
    //         </main>
    //         </div>

    //     );
    // }

export default Portofolio;