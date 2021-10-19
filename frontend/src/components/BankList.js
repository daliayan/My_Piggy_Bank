import React, { Component } from 'react';
// import banksReducer from './reducer/banksReducer.js';
//fetching banks from backend

class BankList extends Component {

    componentDidMount(){
        fetch('http://localhost:3000/banks') 
        .then(resp => resp.json())
        .then(banks => this.setState({bankData: banks} ))
    }

    state = {
        bankData: []
    }

    listBanks(){
        return this.state.bankData.map((bank) => <div>{bank.name} - {bank.gender} - ${bank.fund} </div>)
    }

    // handleRemoveBanks = bank => {
    // banksReducer({
    //     type: 'DELETE_BANKS',
    //     payload: bank
    //     });
    // }

    formData = {
        name: this.name,
        gender: this.gender,
        fund: this.fund
    }

    fetchNewData(formData) {
        const configObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        };

        fetch('http://localhost:3000/banks', configObj)
        .then(resp => resp.json)
        .then(createBankData => this.setState({createBankData}))
    }

    render(){
        return (
            <div>
                <h3>
                    LIST OF BANK DATA BACKEND
                </h3>
                {this.listBanks()}
                {/* {this.props.banks ? this.listBanks() : "loading"} */}
                {/* {this.state.bankData.map((bank) => <div>{bank.name} - {bank.gender} - ${bank.fund} </div>)} */}
            </div>
        )
    }
}

export default BankList;

// const handleRemoveBanks = bank => {
//     banksReducer({
//         type: 'DELETE_BANKS',
//         payload: bank
//     });
// }