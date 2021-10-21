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

                <div>
                        <p id="one-bill" className="photo"> $1
                                <img src={one} alt=''></img>
                                <button class='btn-mon'></button>
                        </p>

                        <p id="five-bill" className="photo"> $5
                                <img src={five} alt=''></img>
                                <button class='btn-mon'></button>
                        </p>
                
                        <p id="ten-bill" className="photo"> $10
                                <img src={ten} alt=''></img>
                                <button class='btn-mon'></button>
                        </p>

                        <p id="twenty-bill" className="photo"> $20
                                <img src={twenty} alt=''></img>
                                <button className='btn-mon'></button>
                        </p>

                        <p id="fifty-bill" className="photo"> $50
                                <img src={fifty} alt='' ></img>
                                <button class='btn-mon'></button>
                        </p>

                        <p id="hundred-bill" className="photo"> $100
                                <img src={hundred} alt=''></img> 
                                <button class='btn-mon'></button>
                        {/* {props.value} */}
                        </p>
                </div> 
        </div>
        )}
}
