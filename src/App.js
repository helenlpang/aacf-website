import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './helpers/ScrollToTop';

import Home from './pages/Home/Home';
import ChurchList from './components/Church/ChurchList';
import Members from './pages/Members/Members';
import AddMember from './pages/Members/AddMember'

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="App-header">
          <Switch>
            <ScrollToTop>
              <Route path="/" exact component={Home} />
              <Route path="/churches" component={ChurchList} />
              <Route path="/members" component={Members} />
              <Route path="/addmembers" component={AddMember}/>
            </ScrollToTop>
          </Switch>
        </div>
      </Router>
    )};
}
  
export default App;