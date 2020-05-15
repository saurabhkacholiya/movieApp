import { fromJS } from 'immutable';

import {
  TOGGLE_SELECTED_MOVIE,
  UPDATE_WISH_LIST,
  SET_MOVIE_DATA,
  LOADER,
} from './actions';


const initialState = fromJS({
  wishListData: [],
  selectedMovie: {},
  movieData : [],
  loading: false,
});

export default function appReducer(state = initialState, action) {
  const immutableData = fromJS(action.data);
  switch (action.type) {
    case TOGGLE_SELECTED_MOVIE:
      return state.set('selectedMovie',immutableData)
    case UPDATE_WISH_LIST:
      return state.set('wishListData',immutableData)
    case LOADER: 
      return state.set('loading', immutableData)
    case SET_MOVIE_DATA:
      return state.set('movieData',immutableData)
    default:
      return state;
  }
}
