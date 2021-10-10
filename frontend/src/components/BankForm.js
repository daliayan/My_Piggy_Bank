// Form to create new bank

import React, { Component } from 'react'

export default class BankForm extends Component {
    render(){
        return (
            <div>
                <form>
                    <h1>Make Your Own Piggy Bank</h1>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input id="name" />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender: </label>
                        <input id="gender" />
                    </div>
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