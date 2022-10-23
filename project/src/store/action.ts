import {createAction} from '@reduxjs/toolkit';
import Films from '../types/films';
import {AppRoute, AuthorizationStatus} from '../const';
import Film from '../types/film';
import {Comments} from '../types/comments';
import Similar from '../types/similar';

const resetMainScreen = createAction('main/resetState');
const changeGenre = createAction<{ currentGenre: string }>('main/changeGenre');

const increaseCardCount = createAction('main/increaseCardCount');
const resetCardCount = createAction('main/resetCardCount');

const resetFilmScreen = createAction('film/resetState');
const changeFilmTab = createAction<{ currentTab: string }>('film/changeFilmTab');

const loadFilms = createAction<Films>('data/loadFilms');
const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

const setAvatar = createAction<string | null>('user/avatar');

const setError = createAction<string | null>('app/setError');

const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

const loadFilm = createAction<Film>('data/loadFilmById');
const loadComments = createAction<Comments>('data/loadCommentsById');
const loadSimilar = createAction<Similar>('data/loadSimilarById');

export {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
  resetCardCount,
  resetFilmScreen,
  changeFilmTab,
  loadFilms,
  setDataLoadedStatus,
  requireAuthorization,
  setError,
  redirectToRoute,
  setAvatar,

  loadSimilar,
  loadFilm,
  loadComments
};
