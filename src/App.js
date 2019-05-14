import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Main from "./component/Main";
import SimpleAppBar from './component/SimpleAppBar';
import ButtonAppBar from './component/ButtonAppBar';
import CardProduct from './component/CardProduct';

import Product from "./Product.js";

class App extends Component {


    render() {
        return (

           

            <div className="App">
                    <ButtonAppBar/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p><Main/></p>
             

                </div>

            
        );
    }
}

export default App;