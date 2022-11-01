import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';

import {userProcess} from './user-process/user-process';
import {mainData} from './main-data/main-data';
import {filmData} from './film-data/film-data';

export const rootReducer = combineReducers({
  [NameSpace.MainScreen]: mainData.reducer,
  [NameSpace.FilmScreen]: filmData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
