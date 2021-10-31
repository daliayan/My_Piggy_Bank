import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchBanks, deleteBank} from '../actions/fetchBanks'

class BankList extends Component {

    state = {
        bankData: []
    }

    fetchBankData(bankData) {
        this.setState((state) => {
            return {
                banks: [...state.banks, bankData]
            }
        })
    }

    deleteBank(bank){
        const byePiggy = this.state.bankData.filter(index => index !== bank)
        return this.props.deleteBank(byePiggy);
        // const config = {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // }

        // fetch(`http://localhost:3000/banks/${bank.id}`, config)
        // .then(resp => resp.json())
        // .then(bankData => this.setState({bankData: byePiggy}))

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

    mapBanks(){
        return this.props.banks.map((bank) => <div className="bank-list-data">
        <ol>
         {bank.name} is a {bank.gender} 🐖 with ${bank.fund} 💰 
            <button onClick={() => {this.deleteBank(bank)}}  key={bank.key} className="delete-button" >
                DELETE
            </button>
        </ol>
        </div>)
    }

    componentDidMount(){
        this.props.fetchBanks();
        console.log(this.props.fetchBanks)
    }

    render(){
        return (
            <div>
                <h2>
                    ALL PIGGY BANKS
                </h2>

                {this.mapBanks()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      banks: state.banks,
      // gives me a prop of .banks
      // Getting info out of the store == gives me value of state // state can be a prop of container
      
    }
}

const mapDispatchToProps = (globalDispatch) => {
    return {
      // fetchBanksDispatch: () => globalDispatch(fetchBanks()),
      fetchBanks: () => globalDispatch(fetchBanks()),
      // fetchBanksDispatch: (dataObject) => globalDispatch(fetchBanks(dataObject)),
      // deletingBank: () => globalDispatch(deletingBank())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BankList);