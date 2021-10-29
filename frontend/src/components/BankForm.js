import React, { Component } from 'react';
import FundCard from '../components/FundCard';
// import {fetchBanks} from './actions/fetchBanks';

export default class BankForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            gender: '',
            fund: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleFunds = this.handleFunds.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event){
        this.setState({
            name: event.target.value
        })
    }

    handleChange(event){
        this.setState({
            gender: event.target.value,
        })
    }

    handleFunds(addedMoney){
        this.setState( (state) => {
                return {
                       fund: addedMoney + state.fund
                }       
        })
    }


    handleSubmit(event) {
        event.preventDefault();
        // this.props.fetchBanksDispatch(this.state);
        const submittedData = this.state;
        this.setState({bankData: submittedData});

        fetch('http://localhost:3000/banks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(submittedData),
        })
        .then(resp => resp.json())

        .then(json => {
            this.setState({submittedData: json})
        })
        // .then(data => {debugger});

        // window.location.replace('http://localhost:3001')
        // window.location.reload(false);
        // sessionStorage.clear()
        // sessionStorage.setItem()
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2 className="piggy-bank-form">MAKE YOUR OWN 🐷💰</h2>
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label>NAME: </label>
                        <input id="name" type="text" value={this.name} onChange={this.handleName} required/>
                    </div>
                    <br></br>
                    <div className="piggy-bank-form-dropdown">
                        <label >GENDER: </label>
                        <select id="gender" value={this.gender} onChange={this.handleChange} >
                            <option>GIRL</option>
                            <option>BOY</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <FundCard dollars={this.state.fund} updateBankFund={this.handleFunds} id="fund"/>

                        <button className="form-button" type="submit">
                            Create Piggy Bank
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}