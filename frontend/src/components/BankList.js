import React, { Component } from 'react';
// import {fetchBanks} from './actions/fetchBanks';
//fetching banks from backend

class BankList extends Component {
    // listBanks = () => {
        // return this.props.banks.map((bank) => <div> {bank.name}</div>)
    // }

    //  listBanks = () => {
    //         console.log(this.fetchBanks())
    // }

    state = {
        banks: []
    }

    render(){
        // const {name, gender} = this.props

        return (
            <div className='bank-list'>
                <h3>
                    {/* {this.listBanks()} */}
                    LIST OF BANK DATA BACKEND
                    {/* {this.props.name}
                    {this.props.gender} */}
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