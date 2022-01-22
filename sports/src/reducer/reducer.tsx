import { Action } from "redux"

interface State {
  theme: string,
  sports: any
}
const initialState:State = {
  theme: 'dark',
  sports: []
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
    default:
      return state
  }
}


export default rootReducer