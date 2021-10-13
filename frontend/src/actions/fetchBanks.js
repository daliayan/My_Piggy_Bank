export function fetchBanks(){
    return (dispatch) => {
        dispatch({ type: 'ADD_BANKS' });
        // debugger
        fetch('http://localhost:3000/banks') 
        .then(resp => resp.json())
        // console.log(resp.JSON)
        .then(banks => dispatch({type: 'ADD_BANKS', banks: banks}))
    };
}