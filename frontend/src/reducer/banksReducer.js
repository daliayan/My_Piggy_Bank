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
        default:
            return state;
    }
}

export default banksReducer;