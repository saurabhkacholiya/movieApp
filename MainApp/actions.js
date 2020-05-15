export const INIT = 'boilerplate/MainApp/INIT';
export function initAction(data) {
  return {
    type: INIT,
    data,
  };
}

export const SET_USER_DETAILS = 'boilerplate/MainApp/SET_USER_DETAILS';
export function setUserDetails(data) {
  return {
    type: SET_USER_DETAILS,
    data,
  };
}

export const TOGGLE_SELECTED_MOVIE = 'boilerplate/MainApp/TOGGLE_SELECTED_MOVIE'
export function toggleTheValueOfSelectedMovie(data){
  return {
    type: TOGGLE_SELECTED_MOVIE,
    data,
  }
}


export const UPDATE_WISH_LIST = 'boilerplate/MainApp/UPDATE_WISH_LIST'
export function updateWishList(data){
  return {
    type: UPDATE_WISH_LIST,
    data,
  }
}

export const GET_SEARCH_TERM_RESULT = 'boilerplate/MainApp/GET_SEARCH_TERM_RESULT'
export function getSearchTermResult(data){
  return{
    type: GET_SEARCH_TERM_RESULT,
    data,
  }
}

export const LOADER = 'boilerplate/MainApp/LOADER';
export function setLoader(data) {
  return {
    type: LOADER,
    data,
  };
}

export const SET_MOVIE_DATA = 'boilerplate/MainApp/SET_MOVIE_DATA';
export function setMovieData(data) {
  return {
    type: SET_MOVIE_DATA,
    data,
  };
}
