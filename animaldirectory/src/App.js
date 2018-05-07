import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Resources from './Resources/Resources'

class App extends React.Component {


  render() {
    return (
      <div>
        <Route exact path='/' component ={Home} />
        <Route exact path='/resources' component ={Resources} />
      </div>
    );
  }
}

export default App;
