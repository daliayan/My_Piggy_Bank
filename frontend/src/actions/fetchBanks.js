export const fetchBanks= () => {
    // return (dispatch) => {
    //     dispatch({ type: 'ADD_BANKS' });
        // debugger
        return (
        fetch('http://localhost:3000/banks') 
        .then(resp => resp.json())
        // console.log(resp.JSON)
        .then(banks => console.log(banks))
            // ({type: 'ADD_BANKS', banks: banks}))
        )
    // };
}