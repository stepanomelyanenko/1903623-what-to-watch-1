import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('films/changeGenre');
export const getFilmsByGenre = createAction('films/getFilmsByGenre');
