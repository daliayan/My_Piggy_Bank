import React, { Component } from 'react';
//fetching banks from backend

class BankCard extends Component {

    state = {
        banks: [],
    };

    render(){
        return (
            <div>
                <p>
                    {this.state.banks.map((piggy_bank) => piggy_bank.name)}
                </p>
            </div>
        )
    }

    componentDidMount(){
        fetch('http://localhost:3000/banks')
        .then(resp => resp.json())
        .then(json => {this.setState({ banks: piggy_bank
            })
        })
    }

    //mapping prop to dispatch

    //exporting
}

export default BankCard;