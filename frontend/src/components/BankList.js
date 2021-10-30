import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchBanks} from '../actions/fetchBanks'

class BankList extends Component {

    componentDidMount(){
        fetch('http://localhost:3000/banks') 
        .then(resp => resp.json())
        .then(banks => this.setState({bankData: banks} ))
        // this.props.fetchBanks()
            //this.setState({bankData: banks} ))
        //(banks => this.props.fetchBanksDispatch(banks))
            // need to set up my action to dispatch
            // ({bankData: banks})
            //  this.setState({bankData: banks} ))
        // fetch('http://localhost:3000/banks') 
        // .then(resp => resp.json())
        // .then(banks => this.props.fetchBanksDispatch(banks)) // dispatching action to a reducer
    }

    state = {
        bankData: []
    }

    deleteBank(bank){
        const byePiggy = this.state.bankData.filter(index => index !== bank)

        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        fetch(`http://localhost:3000/banks/${bank.id}`, config)
        .then(resp => resp.json())
        .then(bankData => this.setState({bankData: byePiggy}))

    };
    

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
                <h2>
                    ALL PIGGY BANKS
                </h2>

                {this.state.bankData.map((bank) => <div className="bank-list-data">
                <ol>
                 {bank.name} is a {bank.gender} 🐖 with ${bank.fund} 💰 
                    <button onClick={() => {this.deleteBank(bank)}}  key={bank.key} className="delete-button" >
                        DELETE
                    </button>
                </ol>
                </div>)}
            </div>
        )
    }
}

export default connect(null, {fetchBanks})(BankList);