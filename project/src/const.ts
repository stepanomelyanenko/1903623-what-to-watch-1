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

export enum Genres {
  All = 'ALL',
  Comedies = 'COMEDIES',
  Crime = 'CRIME',
  Documentary = 'DOCUMENTARY',
  Dramas = 'DRAMAS',
  Horror = 'HORROR',
  KidsFamily = 'KIDS_FAMILY',
  Romance = 'ROMANCE',
  SciFi = 'SCI_FI',
  Thrillers = 'Thrillers'
}

export const VIDEO_PREVIEW_DELAY = 1000;
