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
import Biography from './components/Biography';


class App extends Component {

  // state = {
  //   banks: [],
  // }
  
  // componentDidMount(){
  //   this.props.fetchBanks(); // asyncronous action
  //   // console.log(this.props.fetchBanks)
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

// const mapStateToProps = (state) => {
//   return {
//     banks: state.banks,
//     // gives me a prop of .banks
//     // Getting info out of the store == gives me value of state // state can be a prop of container
    
//   }
// }


// const mapDispatchToProps = (globalDispatch) => {
//   return {
//     // fetchBanksDispatch: () => globalDispatch(fetchBanks()),
//     fetchBanks: () => globalDispatch(fetchBanks()),
//     // fetchBanksDispatch: (dataObject) => globalDispatch(fetchBanks(dataObject)),
//     // deletingBank: () => globalDispatch(deletingBank())
//   }
// }
//to update+change the global state

// handleRemoveBanks = (dispatch) => {
//   deleteBanks: () => dispatch('DELETE_BANKS')
// }

export default (App);
//(connect(null, mapDispatchToProps)
// (App));