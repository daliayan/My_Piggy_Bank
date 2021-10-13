import {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import  NavBar from './components/NavBar';
import {fetchBanks} from './actions/fetchBanks';
import {connect} from "react-redux";
import BankContainer from './containers/BankContainer';
import BankFormContainer from './containers/BankFormContainer';
import FundContainter from './containers/FundContainer';
import BankList from './components/BankList';

class App extends Component {

  // constructor(props){
  //   super()
  //   this.state = {}
  // }

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
          <BankList />
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
    fetchBanks: () => dispatch(fetchBanks())
    // {type: 'ADD_BANKS'}
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(App));