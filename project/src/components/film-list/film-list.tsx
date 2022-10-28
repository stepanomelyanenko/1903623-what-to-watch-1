import {useAppSelector} from '../../hooks';

import GenresFilter from '../genres-filter/genres-filter';
import FilmCard from '../film-card/film-card';
import ShowMoreButton from '../show-more-button/show-more-button';

function FilmList(): JSX.Element {

  const films = useAppSelector((state) => state.filteredFilms);
  const cardCount = useAppSelector((state) => state.cardCount);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresFilter />

      <div className="catalog__films-list">
        {films.slice(0, cardCount).map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}

            title={film.name}
            image={film.previewImage}
            previewVideo={film.previewVideoLink}

          />))}
      </div>

      <ShowMoreButton isAllCardsLoaded={cardCount !== films.length}/>
    </section>
  );
}

export default FilmList;
