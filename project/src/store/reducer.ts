import {createReducer} from '@reduxjs/toolkit';
import films from '../mocks/films';
import {DEFAULT_GENRE} from '../const';
import {changeGenre} from './action';

const initialState = {
  currentGenre: DEFAULT_GENRE,
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    });
});

