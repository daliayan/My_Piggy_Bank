// creating the CARD to hold the fund 
import React from 'react';
import FundCard from '../components/FundCard';
import {connect} from "react-redux";

const FundContainter = (props) => {
        return (
            <div>
                <p>
                    <FundCard />
                    
                </p>
            </div>
        )
}

export default FundContainter;