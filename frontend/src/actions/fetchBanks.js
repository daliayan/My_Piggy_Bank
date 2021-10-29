export const loadBanks = (banks) => ({type: 'ADD_BANKS', payload: banks});
export const deleteBanks = (banks) => ({type: 'DELETE_BANKS', payload: banks});

export function fetchBanks() {
     return (dispatch) => {
      //   dispatch({ type: 'LOADING_BANKS' });
        fetch('http://localhost:3000/banks') 
       .then(resp => resp.json())
       .then(json => dispatch(loadBanks(json))) // dispatching an action to reducer
      //  .then((resp) => dispatch({type: 'ADD_BANKS', banks: resp.bank}))
    }
}

// export function fetchNewData(formData) {
//    const configObj = {
//        method: "POST",
//        headers: {
//            'Content-Type': 'application/json',
//            'Accept': 'application/json'
//        },
//        body: JSON.stringify(formData)
//    };

//    fetch('http://localhost:3000/banks', configObj)
//    .then(resp => resp.json)
//    .then(createBankData => this.setState({createBankData}))
// }
