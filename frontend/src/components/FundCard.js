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

                this.AddOne = this.AddOne.bind(this);
                this.AddFive = this.AddFive.bind(this);
                this.AddTen = this.AddTen.bind(this);
                this.AddTwenty = this.AddTwenty.bind(this);
                this.AddFifty = this.AddFifty.bind(this);
                this.AddHundred = this.AddHundred.bind(this);
        }

        AddOne(event){
                this.setState({funds: event.target.value + 1});
                console.log(1);
        }

        AddFive(event){
                this.setState({funds: event.target.value + 5});
                console.log(5);
        }

        AddTen(event){
                this.setState({funds: event.target.value + 10});
                console.log(10);
        }

        AddTwenty(event){
                this.setState({funds: event.target.value + 20});
                console.log(20);
        }

        AddFifty(event){
                this.setState({funds: event.target.value + 50});
                console.log(50);
        }

        AddHundred(event){
                this.setState({funds: event.target.value + 100});
                console.log(100);
        }

        Total(){
                this.setState({ show: !this.state.show });
        }

        // handleClick(){
        //         console.log('clicked.....')
        // };

       render(){
        return (
        <div>
                <div className="pig-container">
                        <img src={piggy} className='piggy-img' alt='' />
                        <div className="pig-text">
                        {/* value={this.props.value} */}
                                {this.state.show ? <h2>{this.state.funds}</h2> : ''}
                        </div>
                </div>
                
                <div>
                        <p id="one-bill" className="photo"> $1
                                <img src={one} alt=''></img>
                                <button className='btn-mon' onClick={this.AddOne}></button>
                        </p>

                        <p id="five-bill" className="photo"> $5
                                <img src={five} alt=''></img>
                                <button className='btn-mon' onClick={this.AddFive}></button>
                        </p>
                
                        <p id="ten-bill" className="photo"> $10
                                <img src={ten} alt=''></img>
                                <button className='btn-mon' onClick={this.AddTen}></button>
                        </p>

                        <p id="twenty-bill" className="photo"> $20
                                <img src={twenty} alt=''></img>
                                <button className='btn-mon' onClick={this.AddTwenty}></button>
                        </p>

                        <p id="fifty-bill" className="photo"> $50
                                <img src={fifty} alt='' ></img>
                                <button className='btn-mon' onClick={this.AddFifty}></button>
                        </p>

                        <p id="hundred-bill" className="photo"> $100
                                <img src={hundred} alt=''></img> 
                                <button className='btn-mon' onClick={this.AddHundred}></button>
                        {/* {props.value} */}
                        </p>
                </div> 
        </div>
        )}
}

//{this.state.show ? <h2>{this.state.funds}</h2> : ''}


// import {addOne, addFive, addTen, addTwenty, addFifty, addHundred} from '../actions/fetchFunds'
// // import fundReducer from '../reducer/fundReducer.js';


// const FundCard = (props) => {
//         // console.log(props);


// constructor(props){
        //         super(props);
        //         this.state = {
        //                 dollar: 5,
        //                 five: 5,
        //                 ten: 10,
        //                 twenty: 20,
        //                 fifty: 50,
        //                 hundred: 100
        //         };
        // }

        // handleEvent(event){
        //         this.setState({

        //         })
        // }

// export default FundCard;