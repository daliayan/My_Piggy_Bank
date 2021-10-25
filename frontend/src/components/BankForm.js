import React, { Component } from 'react';
import FundContainter from '../containers/FundContainer';

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

    handleFunds(fund){
        this.setState( (state) => {
                return {
                       funds: parseInt(fund.target.value) + state.funds.value
                }
        })
    }

    // handleFunds(fund){
    //     this.setState(
    //            return {
    //                  funds: parseInt(fund.target.value)
    //             })
    // }

    // handleFunds(fund){
    //     this.setState({
    //         funds: parseInt(fund.target.value)
    //     })
    // }

    // handleFunds(event){
    //     this.setState({
    //         fund: event.target.value,
    //     })
    // }

    handleSubmit(event) {
        event.preventDefault();
        
        const submittedData = this.state;
        this.setState({bankData: submittedData});

        fetch('http://localhost:3000/banks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(submittedData),
        });
        window.location.replace('http://localhost:3001')
    }

    render(){
        // const fundAmount = this.state.fund
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2 className="piggy-bank-form">MAKE YOUR OWN 🐷💰</h2>
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label>NAME: </label>
                        <input id="name" type="text" value={this.props.value} onChange={this.handleName} required/>
                    </div>
                    <br></br>
                    <div className="piggy-bank-form-dropdown">
                        <label >GENDER: </label>
                        <select id="gender" value={this.props.value} onChange={this.handleChange} >
                            <option>GIRL</option>
                            <option>BOY</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <FundContainter value={this.props.value} onChange={this.handleFunds} id="fund"/>
                        {/* value={this.props.value} */}
                        {/* fundAmount */}
                    </div>
                    <div>
                        <button className="form-button" type="submit">
                            Create Piggy Bank
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}