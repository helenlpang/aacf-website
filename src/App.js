import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';

import Home from './pages/Home/Home';
import Church from './components/Church/Church';
import ChurchList from './components/Church/ChurchList';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="App-header">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/churches" component={ChurchList} />
          </Switch>
        </div>
      </Router>
    )};
}
  
export default App;