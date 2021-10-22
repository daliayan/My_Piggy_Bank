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

    // deleteBank(bank){
    //     const byePiggy = this.state.bankData.filter(index => index !== bank)
    //     this.setState({bankData: byePiggy});
    // }

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
                <p>
                 {bank.name} - {bank.gender} - ${bank.fund}
                    <button onClick={() => {this.deleteBank(bank)}}  key={bank} className="delete-button" >
                        DELETE
                    </button>
                </p>
                </div>)}
            </div>
        )
    }
}

export default BankList;