import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import Films from '../types/films';
import {APIRoute, AppRoute} from '../const';
import {redirectToRoute} from './action';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken} from '../services/token';
import Similar from '../types/similar';
import Film from '../types/film';
import {Comments} from '../types/comments';
import {UserComment} from '../types/user-comment';
import Promo from '../types/promo';
import {FilmStatus} from '../types/film-status';
import Favorite from '../types/favorite';
import {dropAvatarURL} from '../services/avatar';
import {processErrorHandle} from '../services/process-error-handle';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Films>(APIRoute.Films);
      return data;
    } catch {
      processErrorHandle('Не удалось получить список фильмов');
      throw new Error();
    }
  },
);

export const fetchPromoAction = createAsyncThunk<Promo, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Promo>(APIRoute.Promo);
      return data;
    } catch {
      processErrorHandle('Не удалось получить промо-фильм');
      throw new Error();
    }
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

export const loginAction = createAsyncThunk<{token: string, avatarUrl: string, userId: number}, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token, avatarUrl, id}} = await api.post<UserData>(APIRoute.Login, {email, password});
      return {token: token, avatarUrl: avatarUrl, userId: id};
    } catch {
      processErrorHandle('Не выполнить вход');
      throw new Error();
    }
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
    dropAvatarURL();
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
    try {
      const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
      return data;
    } catch {
      processErrorHandle('Не удалось загрузить фильм');
      throw new Error();
    }
  },
);

export const fetchCommentsByID = createAsyncThunk<Comments, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchCommentsById',
  async (filmId: string, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);
      return data;
    } catch {
      processErrorHandle('Не удалось загрузить комментарии к фильму');
      throw new Error();
    }
  },
);

export const fetchSimilarByID = createAsyncThunk<Similar, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarById',
  async (filmId: string, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Similar>(`${APIRoute.Films}/${filmId}${APIRoute.Similar}`);
      return data;
    } catch {
      processErrorHandle('Не удалось загрузить похожие фильмы');
      throw new Error();
    }
  },
);

export const postComment = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postCommentById',
  async ({comment, rating, filmId}, {dispatch, extra: api}) => {
    try {
      await api.post<UserComment>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
      dispatch(redirectToRoute(`${APIRoute.Films}/${filmId}`));
    } catch {
      processErrorHandle('Не удалось отправить комментарий');
      throw new Error();
    }
  },
);

export const changeFilmStatusToView = createAsyncThunk<Film, FilmStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changeFilmStatusToView',
  async ({filmId: id, status: isFavorite}, { dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Film>(`${APIRoute.Favorite}/${id}/${isFavorite}`);
      return data;
    } catch {
      processErrorHandle('Не удалось изменить статус "К просмотру"');
      throw new Error();
    }
  },
);

export const changePromoStatusToView = createAsyncThunk<Film, FilmStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/changePromoStatusToView',
  async ({filmId: id, status: isFavorite}, { dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Film>(`${APIRoute.Favorite}/${id}/${isFavorite}`);
      return data;
    } catch {
      processErrorHandle('Не удалось изменить статус "К просмотру"');
      throw new Error();
    }
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Favorite, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilmsAction',
  async (_arg, { dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Favorite>(APIRoute.Favorite);
      return data;
    } catch {
      processErrorHandle('Не удалось список фильмов "К просмотру"');
      throw new Error();
    }
  },
);
