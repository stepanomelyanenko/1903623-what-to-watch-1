import {createAction} from '@reduxjs/toolkit';

const resetMainScreen = createAction('main/resetState');
const changeGenre = createAction<{ currentGenre: string }>('main/changeGenre');
const getFilmsByGenre = createAction('main/getFilmsByGenre');

const resetFilmScreen = createAction('film/resetState');
const changeFilmTab = createAction<{ currentTab: string }>('film/changeFilmTab');

export {
  resetMainScreen,
  changeGenre,
  getFilmsByGenre,
  resetFilmScreen,
  changeFilmTab
};
