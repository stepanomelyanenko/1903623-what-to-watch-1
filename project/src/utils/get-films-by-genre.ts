import {DEFAULT_GENRE} from '../const';
import Film from '../types/film';

export const getFilmsByGenre = (films: Film[], genre: string) => {
  if(genre === DEFAULT_GENRE) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
