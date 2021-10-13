import React, { Component } from 'react';
import BankList from '../components/BankList';


class BankContainer extends Component {
    componentDidMount(){
        console.log("My data is connected");
    }

    render(){
        return (
        <div id="bank-container" className="bank-container">
            <p>
              <BankList />
            </p>
        </div>
        )
    }
}

export default BankContainer;