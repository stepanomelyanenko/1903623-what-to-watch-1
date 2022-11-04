import Film from './film';
import Similar from './similar';
import {Comments} from './comments';

export type FilmData = {
  film: Film | null,
  similar: Similar,
  comments: Comments,
  filmPageTab: string,
  isFilmFoundStatus: boolean | null,
  isFilmLoadingStatus: boolean | null
}
