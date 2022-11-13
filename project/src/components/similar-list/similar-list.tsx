import Similar from '../../types/similar';
import EasyFilmCard from '../easy-film-card/easy-film-card';

type SimilarListProps = {
  similar: Similar;
}

function SimilarList({similar}: SimilarListProps): JSX.Element {
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {similar.map((film) => <EasyFilmCard key={film.id} id={film.id} title={film.name} image={film.previewImage}/>)}
      </div>
    </section>
  );
}

export default SimilarList;
