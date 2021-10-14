import React, { Component } from 'react';
import BankList from '../components/BankList';

class BankContainer extends Component {
    componentDidMount(){
        console.log("My data is connected");
    }

    // listBanks = () => {
    //     return this.props.banks.map((bank) => <div> {bank.name}</div>)
    // }

    render(){
        return (
        <div id="bank-container" className="bank-container">
            <BankList />
            {/* list={this.props.banks} */}
            {/* {this.listBanks()} */}
            {/* {this.props.name}
            {this.props.gender} */}
        </div>
        )
    }
}

export default BankContainer;