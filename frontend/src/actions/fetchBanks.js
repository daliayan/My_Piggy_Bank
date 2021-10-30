export const loadBanks = (banks) => ({type: 'GOT_BANKS', payload: banks});
export const addBanks = (bank) => ({type: 'ADD_BANKS', payload:bank});
export const deleteBanks = (banks) => ({type: 'DELETE_BANKS', payload: banks});

export function fetchBanks() {
     return (dispatch) => {
        fetch('http://localhost:3000/banks') 
       .then(resp => resp.json())
       .then(json => dispatch(loadBanks(json))) // dispatching an action to reducer
    }
}


export const createBank = (formData) => {
   return (dispatch) => {
         const configObj = {
            method: 'POST',
            headers: {
               "Content-Type": "application/json",
               "Accepts": "application/json"
            },
            body: JSON.stringify(formData)
          }
         fetch('http://localhost:3000/banks', configObj)
         .then(res => res.json())
         .then(json => { dispatch(addBanks(json))  })
   }  
}

// export function deleteBank(bank){
//    const byePiggy = this.state.bankData.filter(index => index !== bank)

//    const config = {
//        method: 'DELETE',
//        headers: {
//            'Content-Type': 'application/json',
//            'Accept': 'application/json'
//        }
//    }

//    fetch(`http://localhost:3000/banks/${bank.id}`, config)
//    .then(resp => resp.json())
//    .then(bankData => this.setState({bankData: byePiggy}))

// };