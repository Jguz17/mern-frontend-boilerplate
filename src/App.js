import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import About from './components/pages/About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/signin' component={Login}/>
            <Route exact path='/signup' component={Register}/>
            <Route exact path='/about' component={About}/>
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
