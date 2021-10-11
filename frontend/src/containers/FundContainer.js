// creating the CARD to hold the fund 

import React, { Component } from 'react';
import FundCard from '../components/FundCard';

class FundContainter extends Component {

    render(){
        return (
            <div>
                <p>
                    This is where the Fund $$ amount card/image will be rendered
                    Fund Card
                    <FundCard />
                </p>
            </div>
        )
    }
}

export default FundContainter;