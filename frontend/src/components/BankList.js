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
        return this.state.bankData.map((bank) => <div> {bank.name}</div>)
    }

    render(){

        return (
            <div>
                <h3>
                    LIST OF BANK DATA BACKEND
                </h3>
                <p>
                    {this.listBanks()}
                </p>
            </div>
        )
    }
}

export default BankList;