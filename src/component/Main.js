import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import Profile from './Profile';
import Kontak from './Kontak';
import Home from './Home';
import Portofolio from './Portofolio';


const Main = () =>{
        return (
            <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/kontak" component={Kontak}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/portofolio" component={Portofolio}/>
            </Switch>
            </CSSTransitionGroup>
        )
    }


export default Main;