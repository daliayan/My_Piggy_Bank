import React, { Component } from 'react';
import BankForm from '../components/BankForm';

class BankFormContainer extends Component {
  

    render(){
        return (
        <div id="bank-container">
            <h3>
              <BankForm />
            </h3>
        </div>
        )
    }
}

export default BankFormContainer;