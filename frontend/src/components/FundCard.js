import React from 'react';
// import {connect} from "react-redux";
import piggy from '../images/piggy.jpg';
import one from '../images/money/one.jpg';
import five from '../images/money/five.jpg';
import ten from '../images/money/ten.jpg';
import twenty from '../images/money/twenty.jpg';
import fifty from '../images/money/fifty.jpg';
import hundred from '../images/money/hundred.jpg';
// assiging the $$ their values

const FundCard = (props) => {
        console.log(props);

        // handleClick() {
        //       props(console.log('clicked'));
        // }

        return (
        <div>
                <img src={piggy} className='piggy-img' alt=''></img>

           <div className="dollars">
                   <div className='row'>
                        <p id="one-bill"> $1
                                <img src={one} alt='' onClick={this.handleClick()}></img>
                        </p>

                        <p id="five-bill"> $5
                        <img src={five} alt='' onClick={this.handleClick()}></img>
                        </p>
                
                        <p id="ten-bill"> $10
                        <img src={ten} alt='' onClick={this.handleClick()}></img>
                        </p>

                        <p id="twenty-bill"> $20
                        <img src={twenty} alt='' onClick={this.handleClick()}></img>
                        </p>

                        <p id="fifty-bill"> $50
                        <img src={fifty} alt='' onClick={this.handleClick()}></img>
                        </p>

                        <p id="hundred-bill"> $100
                        <img src={hundred} alt='' onClick={this.handleClick()}></img> 
                        {/* {props.value} */}
                        </p>
                     </div>
                </div> 
        </div>
    )
}

export default FundCard;