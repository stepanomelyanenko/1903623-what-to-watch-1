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
  Comments = '/comments',
  Favorite = '/favorite'

}

export const CARDS_PER_STEP = 8;

export enum NameSpace {
  User = 'USER',
  MainScreen = 'MAIN',
  FilmScreen = 'FILM',
  App ='APP'
}

export enum favoriteClickType {
  Film = 'FILM',
  Promo = 'PROMO'
}
