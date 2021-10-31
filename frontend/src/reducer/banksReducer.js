const banksReducer = (state = {banks: []}, action) => { // state is a key of banks 
    switch(action.type){
        case 'GOT_BANKS': 
            // console.log(action)
            return {...state, banks: action.payload}
        case 'ADD_BANKS':
            // console.log(action)
            return { ...state, banks: [...state.banks, action.payload]
        }
        case 'DELETE_BANKS':
            const deletingBank = state.banks.filter(
                index => action.payload.id !== index.id
            );
            // console.log(action)
            return deletingBank()
        default:
            return state;
    }
}

export default banksReducer;