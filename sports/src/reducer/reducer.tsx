type ThemeType = 'dark' | 'light'
export interface State {
  theme: ThemeType,
  sports: any,
  indexNumber: number
}
const initialState:State = {
  theme: 'dark',
  sports: [],
  indexNumber: 0
}

export type ActionType = 
| { type: 'DARK_LIGHT', payload: any } 
| { type: 'GET_ALL_SPORTS', payload: any }
| { type: 'INDEX_INCREMENT' }
| { type: 'RESET_INDEX'}

const rootReducer = (state = initialState, action: ActionType) => {
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
    case 'RESET_INDEX':
      return {
        ...state,
        indexNumber: 0
      }
    default:
      return state
  }
}


export default rootReducer