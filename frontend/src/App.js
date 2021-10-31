import {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  Header from './components/Header';
import  NavBar from './components/NavBar';
import BankContainer from './containers/BankContainer';
import BankFormContainer from './containers/BankFormContainer';
import About from './components/About';
import Biography from './components/Biography';


class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <Router>
          <NavBar />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/biography">
            <Biography />
          </Route>
          <Route path="/banks" />

          <Switch>
            <> 
              <BankContainer />
              <BankFormContainer />
            </>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default (App);