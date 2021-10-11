// Form to create new bank

import React, { Component } from 'react'

export default class BankForm extends Component {
    render(){
        return (
            <div>
                <form className="piggy-bank-form">
                    <h1>Make Your Own Piggy Bank</h1>
                    {/* <img src="images/oink.jpg" alt='pig'></img> */}
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input id="name" />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="gender">Gender: </label>
                        <input id="gender" />
                    </div>
                    <br></br>
                    <div>
                        <button>
                            Create Piggy
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}