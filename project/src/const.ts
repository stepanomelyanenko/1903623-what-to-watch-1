import Films from './types/films';
import Promo from './types/promo';
import {Comments} from './types/comments';
import Similar from './types/similar';
import Film from './types/film';

export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films',
  AddReview = '/review',
  Player = '/player'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum FilmPageTabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export const DEFAULT_GENRE = 'All genres';

export const VIDEO_PREVIEW_DELAY = 1000;
export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Films = '/films',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
  Similar = '/similar',
  Comments = '/comments'
}

export const CARDS_PER_STEP = 8;

export enum NameSpace {
  User = 'USER',
  MainScreen = 'MAIN',
  FilmScreen = 'FILM'
}


export type MainData = {
  films: Films,
  promo: Promo | null,
  isDataLoaded: boolean,
  currentGenre: string,
  filteredFilms: Films,
  cardCount: number,
}


export type FilmData = {
  film: Film | null,
  similar: Similar,
  comments: Comments,
  filmPageTab: string,
  isFilmFoundStatus: boolean | null,
  isFilmLoadingStatus: boolean | null
}
