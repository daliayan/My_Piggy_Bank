import {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import  NavBar from './components/NavBar';
import {fetchBanks} from './actions/fetchBanks';
import {connect} from "react-redux";
import BankContainer from './containers/BankContainer';
import BankFormContainer from './containers/BankFormContainer';


class App extends Component {

  state = {
    banks: [],
  }
  
  componentDidMount(){
    fetchBanks();
  }


  // onClick = () => {
  //   this.setState.bind(this.state.query)
  // }

  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
          </div>
          <div>
            <BankContainer />
          </div>
          <div>
          <BankFormContainer />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    banks: state.banks,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBanks: () => dispatch(fetchBanks())
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(App));