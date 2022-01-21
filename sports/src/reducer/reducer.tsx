import { Action } from "redux"

const initialState = {
  theme: 'dark',
}

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'DARK_LIGHT':
      return {
        ...state,
        theme: action.payload
      }
    default:
      return state
  }
}


export default rootReducer