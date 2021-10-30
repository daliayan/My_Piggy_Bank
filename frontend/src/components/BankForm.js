import React, { Component } from 'react';
import { connect } from 'react-redux';
import FundCard from '../components/FundCard';
import {createBank} from '../actions/fetchBanks';

class BankForm extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         name: '',
    //         gender: '',
    //         fund: 0
    //     };

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleName = this.handleName.bind(this);
    //     this.handleFunds = this.handleFunds.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    state = {
        name: '',
        gender: '',
        fund: 0
    }

    // handleName(event){
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    handleFormChange = (event) => {
        const name = event.target.name;
        const gender = event.target.gender;
        const fund = event.target.fund;
        const value = event.target.value
   
        this.setState({
            [name]: value,
            [gender]: value,
            [fund]: value
        })
    }

    // handleChange(event){
    //     this.setState({
    //         gender: event.target.value,
    //     })
    // }

    // handleFunds(addedMoney){
    //     this.setState( (state) => {
    //             return {
    //                    fund: addedMoney + state.fund
    //             }       
    //     })
    // }


    handleSubmit(event) {
        event.preventDefault();

        const submittedData = {...this.state};
        this.props.createBanks(submittedData);

        this.setState({
            name: '',
            gender: '',
            fund: ''
        })

        // const submittedData = this.state;
        // this.setState({bankData: submittedData});

        // fetch('http://localhost:3000/banks', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify(submittedData),
        // })
        // .then(resp => resp.json())

        // .then(json => {
        //     this.setState({submittedData: json})
        // })
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
                        <input id="name" type="text" value={this.state.name} onChange={this.handleFormChange} required/>
                    </div>
                    <br></br>
                    <div className="piggy-bank-form-dropdown">
                        <label >GENDER: </label>
                        <select id="gender" value={this.state.gender} onChange={this.handleFormChange} >
                            <option>GIRL</option>
                            <option>BOY</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <FundCard dollars={this.state.fund} updateBankFund={this.handleFormChange} id="fund"/>

                        <button className="form-button" type="submit">
                            Create Piggy Bank
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {createBank})(BankForm);