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

export const playerControl = {
  Play: {
    width: 19,
    height: 19,
    xlinkHref: '#play-s',
    desc: 'Play',
    className: 'player__play',
  },

  Pause: {
    width: 14,
    height: 21,
    xlinkHref: '#pause',
    desc: 'Pause',
    className: 'player__play',
  },

  FullScreen: {
    width: 27,
    height: 27,
    xlinkHref: '#full-screen',
    desc: 'Full screen',
    className: 'player__full-screen',
  },
};

export enum favoriteClickType {
  Film = 'FILM',
  Promo = 'PROMO'
}
