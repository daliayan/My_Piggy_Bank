import React, { Component } from 'react';
import thunk from "redux-thunk";
//fetching banks from backend

class BankList extends Component {


    render(){
        return (
            <div className='bank-list'>
                    {this.listBanks()}
            </div>
        )
    }

    //mapping prop to dispatch

    //exporting
}

export default BankList;