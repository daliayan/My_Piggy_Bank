import React, { Component } from 'react';
import BankForm from '../components/BankForm';
import BankList from '../components/BankList';


class BankContainer extends Component {
    // componentDidMount(){
    //     console.log("My data is connected");
    // }

    render(){
        return (
        <div id="bank-container">
            <p>
              <BankList />
              <BankForm />
            </p>
        </div>
        )
    }
}

export default BankContainer;