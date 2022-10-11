import {createAction} from '@reduxjs/toolkit';

const resetMainScreen = createAction('main/resetState');
const changeGenre = createAction<{ currentGenre: string }>('main/changeGenre');

const increaseCardCount = createAction('main/increaseCardCount');
const resetCardCount = createAction('main/resetCardCount');

const resetFilmScreen = createAction('film/resetState');
const changeFilmTab = createAction<{ currentTab: string }>('film/changeFilmTab');

export {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
  resetCardCount,
  resetFilmScreen,
  changeFilmTab
};
