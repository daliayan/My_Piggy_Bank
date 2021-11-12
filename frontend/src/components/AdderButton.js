import React, { Component } from 'react';

class AdderButton extends Component {
    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            total: []
        };
        this.likerIncreasing = this.likerIncreasing.bind(this);
        this.likerIncreasing2 = this.likerIncreasing2.bind(this)
    }

    likerIncreasing(){
         let newCount = this.state.num1 + 1;
         this.setState({
            total: newCount,
         });
    };

    likerIncreasing2(){
        let newCount = this.state.num2 + 2;
        this.setState({
           total: newCount,
        });
   };

    render(){
        return <div>
            <div onClick={this.likerIncreasing} className="liker-funct">Likes: {this.state.num1}</div>
            <div onClick={this.likerIncreasing2} className="liker-funct">Likes: {this.state.num2}</div>
            <h1>{this.state.total}</h1>
        </div>
    }
}

export default AdderButton;