import React, { Component } from 'react';
//fetching banks from backend

class BankList extends Component {

    componentDidMount(){
        fetch('http://localhost:3000/banks') 
        .then(resp => resp.json())
        .then(banks => this.setState({bankData: banks} ))
        // console.log("My data is connected");
    }

    state = {
        bankData: []
    }

    listBanks = () => {
        return this.state.bankData.map((bank) => <div>{bank.name} - {bank.gender} - ${bank.fund} </div>)
    }

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
            </div>
        )
    }
}

export default BankList;