import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import Films from '../../types/films';
import GenresFilter from '../genres-filter/genres-filter';

type FilmListProps = {
  films: Films
}

function FilmList({films}: FilmListProps): JSX.Element {
  const [pointedFilm, setPointedFilm] = useState(NaN);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresFilter />

      <div className="catalog__films-list">
        {films.map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}

            title={film.name}
            image={film.previewImage}
            previewVideo={film.previewVideoLink}

            isPointed={pointedFilm === film.id}
            onChangePointedFilm={(pointedId: number) => {
              setPointedFilm(pointedId);
            }}

          />)
        )}
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default FilmList;
