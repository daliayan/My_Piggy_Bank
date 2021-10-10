import {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import  NavBar from './components/NavBar';
import BankContainer from './containers/BankContainer';

class App extends Component {
  
  render(){
    return (
      <div className="App">
        <Router>
          <NavBar />
          <BankContainer />
        This
      
        </Router>
      </div>
    );
  }
}

export default App;