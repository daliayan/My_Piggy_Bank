// creating the CARD to hold the fund 
import React from 'react';
import FundCard from '../components/FundCard';


const FundContainter = () => {
    // console.log(props);

        return (
            <div id="fund-container" className="fund-container"> 
                <FundCard /> 
            </div>
        )
}

export default FundContainter;

// import {addOne, addFive, addTen, addTwenty, addFifty, addHundred} from '../actions/fetchFunds'
// // import fundReducer from '../reducer/fundReducer.js';


// const FundCard = (props) => {
//         // console.log(props);


//         // constructor(props){
//         //         super(props);
//         //         this.state = {
//         //                 dollar: 5,
//         //                 five: 5,
//         //                 ten: 10,
//         //                 twenty: 20,
//         //                 fifty: 50,
//         //                 hundred: 100
//         //         };
//         // }


// export default FundCard;