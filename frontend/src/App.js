import {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import  Header from './components/Header';
import  NavBar from './components/NavBar';
import {fetchBanks} from './actions/fetchBanks';
import {connect} from "react-redux";
import BankContainer from './containers/BankContainer';
import BankFormContainer from './containers/BankFormContainer';
import About from './components/About';


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
        <Header />
        <Router>
          <NavBar />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/banks" />
          {/* <Route path="/new">
            <BankFormContainer />
          </Route> */}

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

const mapStateToProps = (state) => {
  return {
    banks: state.banks,
    loading: state.loading
  }
}
// connect to global state to pass part of the state to the component as a prop


const mapDispatchToProps = (dispatch) => {
  return {
    fetchBanks: () => dispatch(fetchBanks())
  }
}
//to update+change the global state

// handleRemoveBanks = (dispatch) => {
//   deleteBanks: () => dispatch('DELETE_BANKS')
// }

export default (connect(mapStateToProps, mapDispatchToProps)(App));