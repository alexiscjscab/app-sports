import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"

export const darkLight = (theme: string) => async (dispatch: ThunkDispatch<{}, {},AnyAction> ) => {
  try {
    dispatch({
      type: 'DARK_LIGHT',
      payload: theme
    })

  } catch (error){
    console.log(error)
  }
}