import { Action } from "redux"

interface State {
  theme: string,
  sports: any,
  indexNumber: number
}
const initialState:State = {
  theme: 'dark',
  sports: [],
  indexNumber: 0
}

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'DARK_LIGHT':
      return {
        ...state,
        theme: action.payload
      }
    case 'GET_ALL_SPORTS':
      return {
        ...state,
        sports: action.payload
      }
    case 'INDEX_INCREMENT':
      return {
        ...state,
        indexNumber: state.indexNumber + 1
      }
    default:
      return state
  }
}


export default rootReducer