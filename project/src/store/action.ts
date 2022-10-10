import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction<{ currentGenre: string }>('films/changeGenre');
