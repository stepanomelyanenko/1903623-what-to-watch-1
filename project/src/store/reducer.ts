import {createReducer} from '@reduxjs/toolkit';
import films from '../mocks/films';
import {Genres} from '../const';
import {changeGenre} from './action';

const initialState = {
  currentGenre: <string>Genres.All,
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    });
});

