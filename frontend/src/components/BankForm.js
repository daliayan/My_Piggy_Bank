// Form to create new bank

import React, { Component } from 'react'
import FundContainter from '../containers/FundContainer';

export default class BankForm extends Component {

    constructor(props){
        super(props);
        this.state= {
            createBankData: [],
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event.target.value)
        var submittedData = this.state.createBankData;
        submittedData.push(this.state.value);
        this.setState({bankData: submittedData});
        // console.log(event.target.elements.name.value)
        // console.log(event.target.elements.gender.value)
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2 className="piggy-bank-form">Make Your Own Piggy Bank 🐷💰</h2>
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label>Name: </label>
                        <input id="name" type="text" value={this.state.value} onChange={this.handleChange} required/>
                    </div>
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label >Gender: </label>
                        <select>
                            <option>Girl</option>
                            <option>Boy</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <FundContainter />
                    </div>
                    <div>
                        <button className="form-button">
                            Create Piggy Bank
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}