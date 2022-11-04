import Films from './films';
import Promo from './promo';
import Favorite from './favorite';

export type MainData = {
  films: Films,
  promo: Promo | null,
  isDataLoaded: boolean,
  currentGenre: string,
  filteredFilms: Films,
  cardCount: number,
  favoriteFilms: Favorite,
  favoriteCount: number
}
