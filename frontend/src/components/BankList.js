import React, { Component } from 'react';

class BankList extends Component {

    componentDidMount(){
        fetch('http://localhost:3000/banks') 
        .then(resp => resp.json())
        .then(banks => this.setState({bankData: banks} ))
    }

    state = {
        bankData: []
    }

    deleteBank(bank){
        // console.log(bank);
        const byePiggy = this.state.bankData.filter(index => index !== bank)
        // const byePiggy = this.setState({bankData: byePiggy});
        this.setState({bankData: byePiggy});
        // return this.state.bankData.filter(index => index !== bank)
        // this.setState({data})
        // this.deleteBank = this.deleteBank.bind(this)
    }

    // handleClick(bank){
    //     console.log(this.deleteBank)
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
        // var deletingPig = this.props.deleteBank;
        // console.log(this.setState);
        return (
            <div>
                <h3>
                    LIST OF BANK DATA BACKEND
                </h3>

                {this.state.bankData.map((bank) => <div className="bank-list-data">
                <p>
                 {bank.name} - {bank.gender} - ${bank.fund}
                    <button onClick={() => {this.deleteBank(bank)}}  key={bank} className="delete-button" >
                        DELETE
                    </button>
                </p>
                    {/* {this.listBanks()} */}
                    {/* {this.props.banks ? this.listBanks() : "loading"} */}
                    {/* {() => this.deleteBank(bank.id)} className="delete-button" */}
                    {/* onClick={this.handleClick()} */}
                </div>)}
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

// listBanks(){
//     return this.state.bankData.map((bank) => <div>{bank.name} - {bank.gender} - ${bank.fund} </div>)
// } --

// deleteBank(){
//     this.state.deleteBank.then(
//         response => this.setState({banks: this.state.banks.filter(bank => bank.id !== id)}))
// } --

// handleDelete(){
//     this.props.
// }