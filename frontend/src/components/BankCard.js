import React, { Component } from 'react';
//fetching banks from backend

class BankCard extends Component {

    // state = {
    //     banks: [],
    // };

    // handle submit method

    //handle change

    //rendering

    componentDidMount(){
        fetch('http://localhost:3000/banks')
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                banks: json
            })
        })
    }

    // render(){
    //     return (
    //         <div>
    //             <p>
                    
    //             </p>
    //         </div>
    //     )
    // }

    //mapping prop to dispatch

    //exporting
}

export default BankCard;