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
        }
        case 'DELETE_BANKS':
            const deletingBank = state.banks.filter(
                index => action.payload.id !== index.id
            );
            return deletingBank()
            // const deletingBank = state.banks.splice(index, 1)
            // return  state.banks.filter(
            //     index => action.payload.id !== index.id
            // );
        default:
            return state;
    }
}

export default banksReducer;

// {
//     ...state,
//     banks: state.banks.filter((item, index) => index !== action.payload)
// }