import {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import  NavBar from './components/NavBar';
// import {fetchBanks} from '../actions/fetchBanks';
import BankContainer from './containers/BankContainer';
import FundContainter from './containers/FundContainer';



class App extends Component {
  

  // componentDidMount(){
  //   fetch('http://localhost:3000/banks')
  //   .then(resp => resp.json())
  //   .then((bankData) => {this.setState({ banks: bankData.banks
  //       })
  //   })
  // }

renderBanks = () => {
    return this.state.banks.map((bank) => {
        return (
            <div className="bank-data">
                <h3>{bank.name}</h3>
            </div>
        )
    })
}

  render(){
    return (
      <div className="App">
        <Router>
          <NavBar />
          <BankContainer />
          <FundContainter />
      
        </Router>
      </div>
    );
  }
}

export default App;