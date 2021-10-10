import React from 'react';
import './App.css';
// import GetBank from './components/GetBank';
import { BrowserRouter as Router } from "react-router-dom";
import  NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
    <div className="App">
      This
    </div>
    </Router>
  );
}

export default App;