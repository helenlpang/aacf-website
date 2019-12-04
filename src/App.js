import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';

import Home from './pages/Home/Home';
import Church from './pages/Church/Church';
  
  export default function App() {
    return (
      <Router>
        <NavBar />
        <div className="App-header">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/churches" component={Church} />
          </Switch>
        </div>
      </Router>
    );
  }
  
