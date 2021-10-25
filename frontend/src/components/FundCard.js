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

        constructor(props){
                super(props);
                this.state = {
                        funds: 0,
                        show: true
                };

                this.AddDollar = this.AddDollar.bind(this);
                // this.AddFive = this.AddFive.bind(this);
                // this.AddTen = this.AddTen.bind(this);
                // this.AddTwenty = this.AddTwenty.bind(this);
                // this.AddFifty = this.AddFifty.bind(this);
                // this.AddHundred = this.AddHundred.bind(this);
        }

        AddDollar(event){
                // this.setState({funds: event.target.value + 1});
                this.setState( (state) => {
                        // debugger
                        return {
                               funds: parseInt(event.target.value) + state.funds
                        }
                }, () => console.log(this.state))
                // console.log(1);
        }

        // AddFive(event){
        //         this.setState({funds: event.target.value + 5});
        //         console.log(5);
        // }

        // AddTen(event){
        //         this.setState({funds: event.target.value + 10});
        //         console.log(10);
        // }

        // AddTwenty(event){
        //         this.setState({funds: event.target.value + 20});
        //         console.log(20);
        // }

        // AddFifty(event){
        //         this.setState({funds: event.target.value + 50});
        //         console.log(50);
        // }

        // AddHundred(event){
        //         this.setState({funds: event.target.value + 100});
        //         console.log(100);
        // }

        Total(){
                this.setState({ show: !this.state.show });
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
                                <button className='btn-mon' onClick={this.AddDollar} value={1}></button>
                        </p>

                        <p id="five-bill" className="photo"> $5
                                <img src={five} alt=''></img>
                                <button className='btn-mon' onClick={this.AddDollar} value={5}></button>
                        </p>
                
                        <p id="ten-bill" className="photo"> $10
                                <img src={ten} alt=''></img>
                                <button className='btn-mon' onClick={this.AddDollar} value={10}></button>
                        </p>

                        <p id="twenty-bill" className="photo"> $20
                                <img src={twenty} alt=''></img>
                                <button className='btn-mon' onClick={this.AddDollar} value={20}></button>
                        </p>

                        <p id="fifty-bill" className="photo"> $50
                                <img src={fifty} alt='' ></img>
                                <button className='btn-mon' onClick={this.AddDollar} value={50}></button>
                        </p>

                        <p id="hundred-bill" className="photo"> $100
                                <img src={hundred} alt=''></img> 
                                <button className='btn-mon' onClick={this.AddDollar} value={100}></button>
                        </p>
                </div> 
        </div>
        )}
}