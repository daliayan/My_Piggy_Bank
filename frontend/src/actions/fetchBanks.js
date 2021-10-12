export function fetchBanks(){
    return (dispatch) => {
        dispatch({ type: 'ADD_BANKS' });
        fetch('http://localhost:3000/banks') 
        .then(resp => resp.json())
        .then(banks => dispatch({type: 'ADD_BANKS', banks: banks}))
    };
}