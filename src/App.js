import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Main from "./component/Main";

import ButtonAppBar from './component/ButtonAppBar';

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