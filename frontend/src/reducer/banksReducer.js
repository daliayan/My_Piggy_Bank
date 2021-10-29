const banksReducer = (state = {banks: [], loading: false}, action) => {
    switch(action.type){
        case 'LOADING_BANKS':
            return {
                ...state,
                // banks: [...state.banks],
                loading: true
            }
        case 'ADD_BANKS':
            return { ...state, banks: [...state.banks, action.payload],
        }
        case 'DELETE_BANKS':
            const deletingBank = state.banks.filter(
                index => action.payload.id !== index.id
            );
            return deletingBank()
        default:
            return state;
    }
}

export default banksReducer;

// state is a key of banks 