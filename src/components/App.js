import React, { Component } from 'react';
import {Router, Route, BrowserRouter} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Register from './Register'
import '../styles.css'
import { PrivateRoute } from '../PrivateRoute'
import {history} from '../history'
import {Provider} from 'react-redux'
import {store} from '../store'
class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <Router history={history}>
              <div>
                <Route exact path='/' component={Login}/>
                <Route path='/register' component={Register}/>
                <PrivateRoute path='/home' component={Home}/>
              </div>
            </Router>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
