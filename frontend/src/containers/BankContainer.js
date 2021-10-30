import React, { Component } from 'react';
import BankList from '../components/BankList';

class BankContainer extends Component {

    render(){
        return (
        <div id="bank-container" className="bank-container">
            <BankList />
        </div>
        )
    }
}

export default BankContainer;