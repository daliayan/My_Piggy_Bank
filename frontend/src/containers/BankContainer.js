// This is where the piggy bank card will be displayed 

import React, { Component } from 'react';
import BankForm from '../components/BankForm';
// import BankList from '../components/BankList';


class BankContainer extends Component {
    // componentDidMount(){
    //     console.log("My data is connected");
    // }

    render(){
        // const banks = this.props.banks.map(bank => (
        //     <BankCard 
        //     name={bank.name}
        //     gender={bank.gender}
        //     />
        // ))
        return (
        <div id="bank-container">
            <p>
              <BankForm />
              {/* <BankList /> */}
            </p>
        </div>
        )
    }
}

export default BankContainer;