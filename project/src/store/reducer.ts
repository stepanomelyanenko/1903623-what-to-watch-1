import {createReducer} from '@reduxjs/toolkit';
import films from '../mocks/films';
import {Genres} from '../const';

const initialState = {
  currentGenre: Genres.All,
  films: films,
};

export const reducer = createReducer(initialState, (builder) => null);

