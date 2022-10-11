import {createReducer} from '@reduxjs/toolkit';
import films from '../mocks/films';
import {DEFAULT_GENRE, FilmPageTabs} from '../const';
import {changeFilmTab, changeGenre, getFilmsByGenre, resetFilmScreen, resetMainScreen} from './action';
import {sortFilmsByGenre} from '../utils/sort-films-by-genre';

const initialState = {
  films: films,

  currentGenre: DEFAULT_GENRE,
  shownFilms: films,
  shownCount: films.length < 8 ? films.length : 8,

  filmPageTab: FilmPageTabs.Overview as string,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetMainScreen, (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.shownFilms = films;
      state.shownCount = films.length < 8 ? films.length : 8;
    })
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload.currentGenre;
    })
    .addCase(getFilmsByGenre, (state) => {
      state.shownFilms = sortFilmsByGenre(state.films, state.currentGenre);
    })

    .addCase(resetFilmScreen, (state) => {
      state.filmPageTab = FilmPageTabs.Overview;
    })
    .addCase(changeFilmTab, (state, action) => {
      state.filmPageTab = action.payload.currentTab;
    });
});
