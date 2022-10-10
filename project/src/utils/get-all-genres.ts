import {DEFAULT_GENRE} from '../const';
import Film from '../types/film';

export const getAllGenres = (films: Film[]) => (
  [...new Set([DEFAULT_GENRE, ...films.map((film) => film.genre)])]
);
