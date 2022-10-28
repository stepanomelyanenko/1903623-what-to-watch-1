import {createAction} from '@reduxjs/toolkit';
import Films from '../types/films';
import {AuthorizationStatus} from '../const';
import Film from '../types/film';
import {Comments} from '../types/comments';
import Similar from '../types/similar';
import Promo from '../types/promo';

const resetMainScreen = createAction('main/resetState');
const changeGenre = createAction<{ currentGenre: string }>('main/changeGenre');

const increaseCardCount = createAction('main/increaseCardCount');
const resetCardCount = createAction('main/resetCardCount');

const resetFilmScreen = createAction('film/resetState');
const changeFilmTab = createAction<{ currentTab: string }>('film/changeFilmTab');

const loadFilms = createAction<Films>('data/loadFilms');
const loadPromo = createAction<Promo>('data/loadPromo');

const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

const setAvatar = createAction<string | null>('user/avatar');

const setError = createAction<string | null>('app/setError');

const redirectToRoute = createAction<string>('app/redirectToRoute');

const loadFilm = createAction<Film>('data/loadFilmById');
const loadComments = createAction<Comments>('data/loadCommentsById');
const loadSimilar = createAction<Similar>('data/loadSimilarById');

const setFilmFoundStatus = createAction<boolean>('film/setFilmFoundStatus');
const setFilmLoadedStatus = createAction<boolean>('film/setFilmLoadedStatus');


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
  loadComments,

  loadPromo,

  setFilmFoundStatus,
  setFilmLoadedStatus
};
