import {createSlice} from '@reduxjs/toolkit';
import {FilmData, FilmPageTabs, NameSpace} from '../../const';
import {fetchCommentsByID, fetchFilmByID, fetchSimilarByID} from '../api-actions';

const initialState: FilmData = {
  film: null,
  similar: [],
  comments: [],
  filmPageTab: FilmPageTabs.Overview as string,
  isFilmLoadingStatus: null,
  isFilmFoundStatus: null
};

export const filmData = createSlice({
  name: NameSpace.FilmScreen,
  initialState,
  reducers: {
    changeFilmTab: (state, action) => {
      state.filmPageTab = action.payload;
    },
    resetFilmTab: (state) => {
      state.filmPageTab = FilmPageTabs.Overview;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmByID.pending, (state) => {
        state.isFilmLoadingStatus = true;
      })
      .addCase(fetchFilmByID.fulfilled, (state, action) => {
        state.film = action.payload;

        state.isFilmFoundStatus = true;
        state.isFilmLoadingStatus = false;
      })
      .addCase(fetchFilmByID.rejected, (state, action) => {
        state.isFilmFoundStatus = false
        state.isFilmLoadingStatus = false;
      })
      .addCase(fetchSimilarByID.fulfilled, (state, action) => {
        state.similar = action.payload;
      })
      .addCase(fetchCommentsByID.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
  }
});

export const {
  changeFilmTab,
  resetFilmTab
} = filmData.actions;
