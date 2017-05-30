import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from '../containers/Home';
import City from '../containers/City';
export  default class RouterMap extends Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/city" component={City}/>
                </Switch>
            </Router>
        )
    }
}