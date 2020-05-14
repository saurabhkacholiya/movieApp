import { fromJS } from 'immutable';

import {
  TOGGLE_SELECTED_MOVIE,
  UPDATE_WISH_LIST,
} from './actions';

import { data } from "../constant";

const initialState = fromJS({
  wishListData: [],
  selectedMovie: {},
  movieData : [...data],
});

export default function appReducer(state = initialState, action) {
  const immutableData = fromJS(action.data);
  switch (action.type) {
    case TOGGLE_SELECTED_MOVIE:
      return state.set('selectedMovie',immutableData)
    case UPDATE_WISH_LIST:
      return state.set('wishListData',immutableData)
    default:
      return state;
  }
}
