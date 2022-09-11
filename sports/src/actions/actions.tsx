import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
import { ActionType } from '../reducer/reducer';

export const darkLight =
  (theme: string) => async (dispatch: ThunkDispatch<{}, {}, ActionType>) => {
    try {
      dispatch({
        type: 'DARK_LIGHT',
        payload: theme,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getAllSports =
  () => async (dispatch: ThunkDispatch<{}, {}, ActionType>) => {
    try {
      const response = await axios.get(
        'https://www.thesportsdb.com/api/v1/json/2/all_sports.php'
      );

      dispatch({
        type: 'GET_ALL_SPORTS',
        payload: response.data.sports,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const indexIncrement =
  () => async (dispatch: ThunkDispatch<{}, {}, ActionType>) => {
    try {
      dispatch({
        type: 'INDEX_INCREMENT',
      });
    } catch (error) {
      console.log(error);
    }
  };

export const resetIndex =
  () => async (dispatch: ThunkDispatch<{}, {}, ActionType>) => {
    try {
      dispatch({
        type: 'RESET_INDEX',
      });
    } catch (error) {
      console.log(error);
    }
  };
