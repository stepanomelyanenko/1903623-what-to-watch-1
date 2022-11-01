import {store} from '../store';
import {AuthorizationStatus} from '../const';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  avatar: string | null
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
