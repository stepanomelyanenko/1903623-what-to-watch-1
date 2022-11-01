import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import Films from '../types/films';
import {APIRoute, AppRoute, TIMEOUT_SHOW_ERROR} from '../const';
import {
  // setAvatar,
  // loadFilms,
  redirectToRoute,
  // setDataLoadedStatus,
  setError,
  // loadComments,
  // loadFilm,
  // loadSimilar, loadPromo, setFilmLoadedStatus, setFilmFoundStatus
} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';
import {store} from './index';
import Similar from '../types/similar';
import Film from '../types/film';
import {Comments} from '../types/comments';
import {UserComment} from '../types/user-comment';
import Promo from '../types/promo';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);

    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<Promo, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Promo>(APIRoute.Promo);

    return data;
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login);
  },
);


export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token, avatarUrl}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    // dispatch(setAvatar(avatarUrl));
    // dispatch(redirectToRoute(AppRoute.Root));
    return avatarUrl;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    // dispatch(setAvatar(null));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const fetchFilmByID = createAsyncThunk<Film | null, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmById',
  async (filmId: string, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
    return data;
    //try {
      // dispatch(loadFilm(data));
      // dispatch(setFilmLoadedStatus(true));
      // dispatch(setFilmFoundStatus(true));
    //} catch {
      //return null;
      // dispatch(setFilmLoadedStatus(true));
      // dispatch(setFilmFoundStatus(false));
    //}
  },
);

export const fetchCommentsByID = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCommentsById',
  async (filmId: string, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);

    return data;
  },
);

export const fetchSimilarByID = createAsyncThunk<Similar, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarById',
  async (filmId: string, {dispatch, extra: api}) => {
    const {data} = await api.get<Similar>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);

    return data;
  },
);

export const postComment = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postCommentById',
  async ({comment, rating, filmId}, {dispatch, extra: api}) => {
    //dispatch(setDataLoadedStatus(true));
    await api.post<UserComment>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    dispatch(redirectToRoute(`${APIRoute.Films}/${filmId}`));
    //dispatch(setDataLoadedStatus(false));
  },
);
