// create variable to add or decrease piggy bank fund
// taking fund values + adding them to each piggy bank

export default function fundReducer(state = {money: 0}, action){
    switch(action.type){
        case "ADD":
            return {...state, money: state.money + action.fund}
        case "SUBTRACT":
            return {...state, money: state.money - action.fund}
        default:
            return state 
    }
}