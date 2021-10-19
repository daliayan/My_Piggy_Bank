const banksReducer = (state = {banks: [], loading: false}, action) => {
    switch(action.type){
        case 'LOADING_BANKS':
            return {
                ...state,
                banks: [...state.banks],
                loading: true
            }
        case 'ADD_BANKS':
            return {
                ...state,
                banks: action.banks,
                loading: false
        }
        case 'DELETE_BANKS':
            return {
                ...state,
                banks: state.banks.filter((item, index) => index !== action.payload)
            }
        default:
            return state;
    }
}

export default banksReducer;