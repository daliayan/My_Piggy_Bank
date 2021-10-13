import {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import  NavBar from './components/NavBar';
// import {fetchBanks} from './actions/fetchBanks';
import {connect} from "react-redux";
import BankContainer from './containers/BankContainer';
import BankFormContainer from './containers/BankFormContainer';
import FundContainter from './containers/FundContainer';

class App extends Component {

  state = {
    banks: [],
  }
  
  componentDidMount(){
    this.props.fetchBanks();
  }


  // onClick = () => {
  //   this.props.fetchBanks(this.state.query)
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
          <div>
          <FundContainter />
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
    fetchBanks: () => dispatch({type: 'ADD_BANKS'})
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(App));