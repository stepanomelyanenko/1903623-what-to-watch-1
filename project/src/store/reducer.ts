import {createReducer} from '@reduxjs/toolkit';
//import films from '../mocks/films';
import {AuthorizationStatus, DEFAULT_GENRE, FilmPageTabs} from '../const';
import {
  changeFilmTab,
  changeGenre,
  increaseCardCount, loadFilms, requireAuthorization,
  resetCardCount,
  resetFilmScreen,
  resetMainScreen
} from './action';
import {filterFilmsByGenre} from '../utils/filter-films-by-genre';
import Films from '../types/films';

type InitialState = {
  films: Films;
  currentGenre: string,
  filteredFilms: Films,
  cardCount: number,
  authorizationStatus: string,
  filmPageTab: string
}

const initialState: InitialState = {
  films: [],

  currentGenre: DEFAULT_GENRE,
  filteredFilms: [],
  //cardCount: films.length < 8 ? films.length : 8,
  cardCount: 0,

  authorizationStatus: AuthorizationStatus.Unknown,

  filmPageTab: FilmPageTabs.Overview as string,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetMainScreen, (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.filteredFilms = state.films;
      state.cardCount = state.films.length < 8 ? state.films.length : 8;
    })
    .addCase(changeGenre, (state, action) => {
      const filteredFilms = filterFilmsByGenre(state.films, action.payload.currentGenre);

      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount = filteredFilms.length < 8 ?
        filteredFilms.length :
        8;
    })

    .addCase(increaseCardCount, (state) => {
      state.cardCount = (state.cardCount + 8) < state.filteredFilms.length ?
        state.cardCount + 8 :
        state.filteredFilms.length;
    })

    .addCase(resetCardCount, (state) => {
      state.cardCount = state.filteredFilms.length < 8 ?
        state.filteredFilms.length :
        8;
    })

    .addCase(resetFilmScreen, (state) => {
      state.filmPageTab = FilmPageTabs.Overview;
    })
    .addCase(changeFilmTab, (state, action) => {
      state.filmPageTab = action.payload.currentTab;
    })

    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
