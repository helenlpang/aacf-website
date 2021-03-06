import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './helpers/ScrollToTop';

import Home from './pages/Home/Home';
import ChurchList from './components/Church/ChurchList';
import Members from './pages/Members/Members';
import AddMembers from './pages/Members/AddMember';
import City from './components/Church/City';
import Aletheia from './components/Church/Aletheia';
import Symphony from './components/Church/Symphony';
import Photos from './components/Photos/photos';
import About from './components/About/about';

//imports all pages and creates routes to them
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
              <Route path="/addmembers" component={AddMembers} />
              <Route path="/citylife" component={City} />
              <Route path="/aletheia" component={Aletheia} />
              <Route path="/symphony" component={Symphony} />
              <Route path="/photos" component={Photos} />
              <Route path="/about" component={About} />
            </ScrollToTop>
          </Switch>
        </div>
      </Router>
    )};
}
  
export default App;