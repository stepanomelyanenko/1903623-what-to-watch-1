import {createSlice} from '@reduxjs/toolkit';
import {CARDS_PER_STEP, DEFAULT_GENRE, NameSpace} from '../../const';
import {changePromoStatusToView, fetchFavoriteFilmsAction, fetchFilmsAction, fetchPromoAction} from '../api-actions';
import {filterFilmsByGenre} from '../../utils/filter-films-by-genre';
import {MainData} from '../../types/main-data';
//import {processErrorHandle} from '../../services/process-error-handle';

const initialState: MainData = {
  films: [],
  promo: null,
  isDataLoaded: false,
  currentGenre: DEFAULT_GENRE,
  filteredFilms: [],
  cardCount: 0,
  favoriteFilms: [],
  favoriteCount: 0
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
    },

    setIsDataLoaded: (state, action) => {
      state.isDataLoaded = action.payload;
    },

    setFavoriteCount: (state, action) => {
      state.favoriteCount = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        const films = action.payload;

        state.films = films;
        state.filteredFilms = films;
        state.cardCount = films.length < CARDS_PER_STEP ? films.length : 8;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      })

      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteCount = action.payload.length;
        state.isDataLoaded = false;
      })
      .addCase(changePromoStatusToView.fulfilled, (state, action) => {
        state.promo = action.payload;

      })
      .addCase(changePromoStatusToView.rejected, (state, action) => {
        //processErrorHandle('ERROR');
      });
  }
});

export const {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
  setFavoriteCount
} = mainData.actions;
