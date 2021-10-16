import React from 'react';
// import {connect} from "react-redux";
import piggy from '../images/piggy.jpg';
// assiging the $$ their values

const FundCard = props => {

        return (
        <div>
                <img src={piggy} className='piggy-img' alt=''></img>
            
                <p id="one-bill"> $1
                {/* <img></img> */}
                </p>

                <p id="five-bill"> $5
                {/* <img></img> */}
                </p>
            
                <p id="ten-bill"> $10
                {/* <img></img> */}
                </p>

                <p id="twenty-bill"> $20
                {/* <img></img> */}
                </p>

                <p id="fifty-bill"> $50
                {/* <img></img> */}
                </p>

                <p id="hundred-bill"> $100
                {/* <img></img> */} 
                {/* {props.value} */}
                </p>
        </div>
    )
}

export default FundCard;