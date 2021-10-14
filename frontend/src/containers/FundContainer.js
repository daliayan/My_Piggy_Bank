// creating the CARD to hold the fund 
import React from 'react';
import FundCard from '../components/FundCard';


const FundContainter = (props) => {
        return (
            <div id="fund-container" className="fund-container"> 
                <FundCard /> 
            </div>
        )
}

export default FundContainter;