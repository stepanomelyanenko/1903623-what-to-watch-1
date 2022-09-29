import Similar from '../../types/similar';
import DevFilmCard from '../dev-film-card/dev-film-card';

type SimilarListProps = {
  similar: Similar;
}

function SimilarList({similar}: SimilarListProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {similar.map((film) => <DevFilmCard key={film.id} title={film.name} image={film.previewImage}/>)}
      </div>
    </section>
  );
}

export default SimilarList;
