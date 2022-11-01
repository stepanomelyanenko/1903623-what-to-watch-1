import {createSlice} from '@reduxjs/toolkit';
import {CARDS_PER_STEP, DEFAULT_GENRE, MainData, NameSpace} from '../../const';
import {fetchFilmsAction, fetchPromoAction} from '../api-actions';
import {filterFilmsByGenre} from '../../utils/filter-films-by-genre';

const initialState: MainData = {
  films: [],
  promo: null,
  isDataLoaded: false,
  currentGenre: DEFAULT_GENRE,
  filteredFilms: [],
  cardCount: 0
};

export const mainData = createSlice({
  name: NameSpace.MainScreen,
  initialState,
  reducers: {
    resetMainScreen: (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.filteredFilms = state.films;
      state.cardCount = state.films.length < CARDS_PER_STEP ? state.films.length : CARDS_PER_STEP;
    },
    changeGenre: (state, action) => {
      const filteredFilms = filterFilmsByGenre(state.films, action.payload.currentGenre);

      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount = filteredFilms.length < CARDS_PER_STEP ?
        filteredFilms.length :
        CARDS_PER_STEP;
    },

    increaseCardCount: (state) => {
      state.cardCount = (state.cardCount + CARDS_PER_STEP) < state.filteredFilms.length ?
        state.cardCount + CARDS_PER_STEP :
        state.filteredFilms.length;
    },

    resetCardCount: (state) => {
      state.cardCount = state.filteredFilms.length < CARDS_PER_STEP ?
        state.filteredFilms.length :
        8;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        // state.isDataLoaded = false;
      })
      //fix there
      // .addCase(fetchPromoAction.pending, (state) => {
      //   state.isDataLoaded = true;
      // })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isDataLoaded = false;
      })
  }
});

export const {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
  resetCardCount
} = mainData.actions;
