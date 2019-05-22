import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { CSSTransitionGroup } from 'react-transition-group';
import Git from '../image/github-logo.svg';
import Steam from '../image/steam.svg';
import Tw from '../image/twitter.svg';
import Dis from '../image/discord.svg';




const Kontak = () =>{
        return (
            <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
       
            <div className="container">
                
                    
                    <div className="row">
                    
                    <Grid container justify="center" alignItems="center">
                            
                            <div className="col s12 m12 l12">
                            <div class="jumbotron">
                            
                                <h1 class="display-3" style={{color:"whitesmoke", textShadow:"3px 3px black"}}>Find Me On !</h1>
                                
                            </div>
                            </div>
                    </Grid>        

                            <Grid container justify="center" alignItems="center">
                            <div className="container con2 center" >
                            <div className="col s6 m6 l3">
                                
                                <img src={Steam} alt="me" class="responsive-img" width="40%"/>
                                <hr className="hrrr"></hr>    
                                <p className="lead"><a href="https://steamcommunity.com/profiles/76561198810038230/home" style={{textShadow:"2px 2px black", fontWeight:"bold"}}>Regenschwarz</a></p>

                            </div>
                            <div className="col s6 m6 l3">
                                
                                <img src={Git} alt="me" class="responsive-img" width="40%"/>
                                <hr className="hrrr"></hr>
                                <p className="lead"><a href="https://github.com/HerrscherZiel "style={{textShadow:"2px 2px black", fontWeight:"bold"}}>HerrscherZiel</a></p>
                                
                            </div>
                            <div className="col s6 m6 l3">
                                
                                <img src={Dis} alt="me" class="responsive-img" width="40%"/>
                                <hr className="hrrr"></hr>
                                <p className="lead"><a href="https://discordapp.com/"style={{textShadow:"2px 2px black", fontWeight:"bold"}}>#7700Arne</a></p>

                            </div>
                            <div className="col s6 m6 l3">
                                
                                <img src={Tw} alt="me" class="responsive-img" width="40%"/>
                                <hr className="hrrr"></hr>
                                <p className="lead" href=""><a href="https://twitter.com/HerrscherZiel"style={{ fontWeight:"bold",textShadow:"2px 2px black"}}>HerrscherZiel</a></p>

                            </div>
                            </div>
                           
                    </Grid>      
                            
                    <Grid container justify="center" alignItems="center">
                            
                            <div className="col s12 m12 l12">
                            <div class="jumbotron">
                            
                                <h1 class="display-3" style={{color:"whitesmoke", textShadow:"3px 3px black"}}>Or E-mail me below</h1>
                                
                            </div>
                            </div>
                    </Grid>    

                    </div>    
                           
                            
                    <div className="card-panel" style={{color:"black"}} >
                        <h5 style={{textAlign:"center"}}>E-Mail saya melalui form dibawah :</h5><hr className="hrrrr"></hr> 
                        <br></br>
                        <form class="col s6 m6 l6" >
                        <div class="row">
                            <div class="input-field col s12">
                            <input  id="first_name" type="text" class="validate" ></input>
                            <label for="first_name">Nama</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input id="email" type="email" class="validate"></input>
                            <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input id="password" type="text" class="validate" ></input>
                            <input id="password" type="text" class="validate"></input>
                            <input id="password" type="text" class="validate"></input>
                            <label for="password">Pesan</label>
                            </div>
                        </div>
                        <Grid container justify="center" alignItems="center"><a class="btn btn-lg" style={{textDecoration: "none", color:"white", backgroundColor:"#ee6e73"}}>
                                Kirim Email     </a> </Grid>

                        </form>
                    </div>
        
                                
                              
                        
                  

                </div>
    </CSSTransitionGroup>
        );
    }


export default Kontak;