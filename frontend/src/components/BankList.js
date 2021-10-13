import React, { Component } from 'react';
//fetching banks from backend

class BankList extends Component {

    // listBanks = () => {
    //     return this.props.banks.map((bank) => <div> {bank.name}</div>)
    // }

    render(){
        return (
            <div className='bank-list'>
                <h3>
                    {/* {this.listBanks()} */}
                    LIST OF BANK DATA BACKEND
                </h3>
            </div>
        )
    }
}

// function BankListItems(props){
//     const listedBanks =  props.banks.map((bank) => <div> {bank.name}</div>);
// }

// function BankListItems(props){
    //     const listedBanks =  props.banks.map((bank) => <div> {bank.name}</div>);
    // }

export default BankList;