import React, { Component } from 'react';
// import {connect} from "react-redux";
import piggy from '../images/piggy.jpg';
import one from '../images/money/one.jpg';
import five from '../images/money/five.jpg';
import ten from '../images/money/ten.jpg';
import twenty from '../images/money/twenty.jpg';
import fifty from '../images/money/fifty.jpg';
import hundred from '../images/money/hundred.jpg';
// import fundReducer from '../reducer/fundReducer.js';
// assiging the $$ their values

export default class FundCard extends Component {
        // console.log(props);

        // handleClick() {
        //       props(console.log('clicked'));
        //onClick={this.handleClick()}
        // }

        constructor(props){
                super(props);
                this.state = {
                        dollar: 5,
                        five: 5,
                        ten: 10,
                        twenty: 20,
                        fifty: 50,
                        hundred: 100
                };
        }

        handleEvent(event){
                this.setState({

                })
        }

        handleClick(props){
                console.log('clicked.....')
        };

       render(){
        return (
        <div>
                <img src={piggy} className='piggy-img' alt=''></img>

           <div className="dollars-container">
                   <div>
                   {/* className='row' */}
                        <p id="one-bill" className="photo"> $1
                                <img src={one} alt=''></img>
                        </p>

                        <p id="five-bill"> $5
                        <img src={five} alt='' className="photo"></img>
                        </p>
                
                        <p id="ten-bill"> $10
                        <img src={ten} alt='' className="photo"></img>
                        </p>

                        <p id="twenty-bill"> $20
                        <img src={twenty} alt='' className="photo"></img>
                        </p>

                        <p id="fifty-bill"> $50
                        <img src={fifty} alt='' className="photo"></img>
                        </p>

                        <p id="hundred-bill"> $100
                        <img src={hundred} alt='' className="photo"></img> 
                        {/* {props.value} */}
                        </p>
                     </div>
                </div> 
        </div>
        )}
}
