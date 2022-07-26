import { M_SET_ERROR } from './actions';
import update from 'immutability-helper';

const initialState = {
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case M_SET_ERROR:
      return update(state, {
        error: {
          $set: action.error
        }
      });
    default:
      return state;
  }
}