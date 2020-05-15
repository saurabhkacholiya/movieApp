import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

export const fetchWishListData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('wishListData'),
);

export const fetchMovieData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('movieData'),
);

export const fetchSelectedMovie = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('selectedMovie'),
);

export const fetchLoaderStatus = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.get('loading'),
);