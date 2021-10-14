// Form to create new bank

import React, { Component } from 'react'
import FundContainter from '../containers/FundContainer';

export default class BankForm extends Component {
    render(){
        return (
            <div>
                <form>
                    <h1 className="piggy-bank-form">Make Your Own Piggy Bank 🐷💰</h1>
                    {/* <img src="images/oink.jpg" alt='pig'></img> */}
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label>Name: </label>
                        <input id="name" />
                    </div>
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label >Gender: </label>
                        <input id="gender" />
                    </div>
                    <br></br>
                    <div>
                        <button className="form-button">
                            Create Piggy Bank
                        </button>
                    </div>
                    <div>
                        <FundContainter />
                    </div>
                </form>
            </div>
        )
    }
}