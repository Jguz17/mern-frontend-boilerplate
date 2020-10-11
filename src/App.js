import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import About from './components/pages/About'
import AuthState from './context/auth/AuthState'

import './App.css';

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <Navbar/>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/about' component={About}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AuthState>
    
  );
}

export default App;
