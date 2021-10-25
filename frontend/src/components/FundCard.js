import React, { Component } from 'react';
// import {connect} from "react-redux";

import piggy from '../images/piggy.jpg';
import one from '../images/money/one.jpg';
import five from '../images/money/five.jpg';
import ten from '../images/money/ten.jpg';
import twenty from '../images/money/twenty.jpg';
import fifty from '../images/money/fifty.jpg';
import hundred from '../images/money/hundred.jpg';

export default class FundCard extends Component {

        constructor(props){
                super(props);
                this.state = {
                        funds: 0,
                };
                this.AddMoney = this.AddMoney.bind(this);
        }

        AddMoney(event){
                this.setState( (state) => {
                        return {
                               funds: parseInt(event.target.value) + state.funds
                        }
                })
        }

       render(){
        return (
        <div>
                <div className="pig-container">
                        <img src={piggy} className='piggy-img' alt='' />
                        <div className="pig-text">
                                { <h2>{this.state.funds}</h2>}
                        </div>
                </div>
                
                <div>
                        <p id="one-bill" className="photo"> $1
                                <img src={one} alt=''></img>
                                <button className='btn-mon' onClick={this.AddMoney} value={1} type="button"></button>
                        </p>

                        <p id="five-bill" className="photo"> $5
                                <img src={five} alt=''></img>
                                <button className='btn-mon' onClick={this.AddMoney} value={5} type="button"></button>
                        </p>
                
                        <p id="ten-bill" className="photo"> $10
                                <img src={ten} alt=''></img>
                                <button className='btn-mon' onClick={this.AddMoney} value={10} type="button"></button>
                        </p>

                        <p id="twenty-bill" className="photo"> $20
                                <img src={twenty} alt=''></img>
                                <button className='btn-mon' onClick={this.AddMoney} value={20} type="button"></button>
                        </p>

                        <p id="fifty-bill" className="photo"> $50
                                <img src={fifty} alt='' ></img>
                                <button className='btn-mon' onClick={this.AddMoney} value={50} type="button"></button>
                        </p>

                        <p id="hundred-bill" className="photo"> $100
                                <img src={hundred} alt=''></img> 
                                <button className='btn-mon' onClick={this.AddMoney} value={100} type="button"></button>
                        </p>
                </div> 
        </div>
        )}
}