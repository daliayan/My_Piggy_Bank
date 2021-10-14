import React, { Component } from 'react';
import BankList from '../components/BankList';

class BankContainer extends Component {
    componentDidMount(){
        fetch('http://localhost:3000/banks') 
        .then(resp => resp.json())
        .then(banks => this.setState({bankData: banks} ))
        // console.log("My data is connected");
    }

    state = {
        bankData: []
    }

    listBanks = () => {
        return this.state.bankData.map((bank) => <div> {bank.name}</div>)
    }

    render(){
        console.log(this.state)
        return (
        <div id="bank-container" className="bank-container">
            <BankList />
            {/* list={this.props.banks} */}
            {this.listBanks()}
            {/* {this.props.name}
            {this.props.gender} */}
        </div>
        )
    }
}

export default BankContainer;