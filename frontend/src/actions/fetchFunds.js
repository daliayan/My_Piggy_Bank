var ADD = "ADDITION"

export const addOne = () => ({type: ADD, payload: 1})
export const addFive = () => ({type: ADD, payload: 5})
export const addTen = () => ({type: ADD, payload: 10})
export const addTwenty = () => ({type: ADD, payload: 20})
export const addFifty = () => ({type: ADD, payload: 50})
export const addHundred = () => ({type: ADD, payload: 100})

export const addFunds = (total) => ({type: ADD, payload: total})