import React, { Component } from 'react';
import FundContainter from '../containers/FundContainer';

export default class BankForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            gender: '',
            fund: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleName = this.handleName.bind(this);
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
            // fund: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const submittedData = this.state;
        // submittedData.push(this.props.value);
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

    // handleClick(){
    //     console.log('clicked.....')
    // }


    render(){
        // console.log(this.setState);
        var handleDataUpdate = this.props.fetchNewData;
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2 className="piggy-bank-form">Make Your Own Piggy Bank 🐷💰</h2>
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label>Name: </label>
                        <input id="name" type="text" value={this.props.value} onChange={this.handleName} required/>
                    </div>
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label >Gender: </label>
                        <select id="gender" value={this.props.value} onChange={this.handleChange}>
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
                        {/* onClick={this.handleClick()} */}
                    </div>
                </form>
            </div>
        )
    }
}