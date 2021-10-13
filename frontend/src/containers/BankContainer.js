import React, { Component } from 'react';
import BankList from '../components/BankList';
// import {fetchBanks} from './actions/fetchBanks';


class BankContainer extends Component {
    // componentDidMount(){
    //     console.log("My data is connected");
    // }

    render(){
        return (
        <div id="bank-container" className="bank-container">
            <BankList />
            {/* list={this.props.banks} */}
        </div>
        )
    }
}

export default BankContainer;