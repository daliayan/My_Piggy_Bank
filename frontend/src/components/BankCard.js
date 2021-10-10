import React, { Component } from 'react';
//fetching banks from backend

class BankCard extends Component {

    state = {
        banks: [],
    };

    componentDidMount(){
        fetch('http://localhost:3000/banks')
        .then(resp => resp.json())
        .then((bankData) => {this.setState({ banks: bankData.banks
            })
        })
    }

    renderBanks = () => {
        return this.state.banks.map((bank) => {
            return (
                <div className="bank-data">
                    <h3>{bank.name}</h3>
                </div>
            )
        })
    }

    render(){
        return (
            <div className='bank-list'>
                    {this.renderBanks()}
            </div>
        )
    }

    //mapping prop to dispatch

    //exporting
}

export default BankCard;