import React from 'react';
import Me from '../image/me.jpeg';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';



        const Home = () =>{
        return(
            <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>

                    <Grid container justify="center" alignItems="center">
                            <div className="row" >
                                 <div className="col s12 m12 l12 ">  
                                    <img src={Me} alt="me" class="circle responsive-img"/>
                                    </div>
                            </div>
                    </Grid>

            <Grid container justify="center" alignItems="center">
            <div className="container">
                    <div className="row">
                    <div className="col s12 m6 l4">
                        
                            <div class="jumbotron">
                                <h2 class="display-6" style={{color:"whitesmoke", textShadow:"3px 3px black"}}>Elang Bayu Aji Hartanto</h2>
                                <hr class="my-4"></hr>
                                <p style={{textAlign:"center", textShadow:"1px 1px black"}} className="lead">Saya merupakan mahasiswa Ilmu Komputer dan Sistem Informasi Universitas Gadjah Mada. Saya seorang praktisi Front-End dan 
                                Back-End Developer yang masih berlatih untuk mematangkan kemampuan saya. Hobi saya bermain game, saya juga tertarik dengan membaca, menulis, dan menggambar</p>
                                <br></br><br></br>
                                <Grid container justify="center" alignItems="center"><a class="btn btn-secondary btn-lg" style={{textDecoration: "none", backgroundColor:"#ee6e73"}}>
                                <Link to ="/Profile">Lihat Profil Saya</Link></a> </Grid>
                            </div>
                            
                        </div>            
                        </div>
                    </div>
                </Grid>
            
             
            </CSSTransitionGroup>      
        )
    }


export default Home;