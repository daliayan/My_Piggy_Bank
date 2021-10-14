export const fetchBanks= () => {
    // return (dispatch) => {
    //     dispatch({ type: 'ADD_BANKS' });
        // debugger
        return (
        fetch('http://localhost:3000/banks') 
        .then(resp => resp.json())
        // .then(banks => console.log(banks))
            // ({type: 'ADD_BANKS', banks: banks}))
            //.then(banks => dispatch({type: 'ADD_BANKS', banks: banks}))
        );
}


// export function fetchBanks(){
//     return (dispatch) => {
//         dispatch({ type: 'ADD_BANKS' });
//         // debugger
//         fetch('http://localhost:3000/banks') 
//         .then(resp => resp.json())
//         // console.log(resp.JSON)
//         .then(banks => dispatch({type: 'ADD_BANKS', banks: banks}))
        
//     };
// }


// .then(json => json.forEach(bankObj => {
    //     const bank = new Bank(bankObj)
    //     bank.fetchBanks();
    // })