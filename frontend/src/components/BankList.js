import React, { Component } from 'react';

//fetching banks from backend

class BankList extends Component {

    listBanks = () => {
        return this.props.banks.map(bank => <div> {bank.name}</div>)
    }

    render(){
        return (
            <div className='bank-list'>
                    {this.listBanks()}
            </div>
        )
    }
}

export default BankList;