// create variable to add or decrease piggy bank fund
// taking fund values + adding them to each piggy bank

export default function fundReducer(state = {fund: 0}, action){
    switch(action.type){
        case "ADD":
            return {...state, fund: state.fund + action.payload}
        default:
            return state 
    }
}