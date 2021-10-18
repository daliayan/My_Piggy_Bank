import React, { Component } from 'react';
// import FundContainter from '../containers/FundContainer';

export default class BankForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            createBankData: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            name: event.target.value,
            gender: event.target.value,
            fund: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(this.state.term)
        const submittedData = this.state.createBankData;
        submittedData.push(this.state.value);
        this.setState({bankData: submittedData});
        // console.log(event.target.elements.name.value)
        // console.log(event.target.elements.gender.value)

        fetch('http://localhost:3000/banks', {
            method: 'POST',
            body:submittedData,
        });
    }

    handleClick =() =>{
        console.log('clicked.....')
    }


    render(){
        // console.log(this.setState);
        var handleUpdate = this.props.fetchNewData;
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h2 className="piggy-bank-form">Make Your Own Piggy Bank 🐷💰</h2>
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label>Name: </label>
                        <input id="name" type="text" value={this.props.value} onChange={this.handleChange}/>
                        {/* required */}
                        {/* onClick={this.handleClick()} */} 
                    </div>
                    <br></br>
                    <div className="piggy-bank-form-text">
                        <label >Gender: </label>
                        <select>
                            <option>Girl</option>
                            <option>Boy</option>
                        </select>
                    </div>
                    <br></br>
                    {/* <div>
                        <FundContainter />
                    </div> */}
                    <div>
                        <button className="form-button" onClick={this.handleClick()}>
                            Create Piggy Bank
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

// const onItemClick = useCallback(event => {
//     console.log('clicked', event.target);
//     }, [data]
// )

// var dataSubmission = useCallback(event => {
//     console.log('clicked', event.target);
//     }
// )

// const dataConnector = ({bankList, callback}) => {
//     // return (

//     // )
// }