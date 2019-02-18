import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import Login from './Login'
import Home from './Home'
import '../styles.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
