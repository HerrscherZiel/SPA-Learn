import React, {Component} from 'react';
import './App.css';
import Main from "./component/Main";
import ButtonAppBar from './component/ButtonAppBar';

class App2 extends Component {


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

export default App2;