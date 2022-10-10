import {GenresArray} from '../../const';

function genresFilter(): JSX.Element {
  const genres = GenresArray;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          className="catalog__genres-item"
          key={genre}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>))}

      {/*<li className="catalog__genres-item catalog__genres-item--active">*/}
      {/*  <a href="#" className="catalog__genres-link">All genres</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Comedies</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Crime</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Documentary</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Dramas</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Horror</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Kids & Family</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Romance</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Sci-Fi</a>*/}
      {/*</li>*/}
      {/*<li className="catalog__genres-item">*/}
      {/*  <a href="#" className="catalog__genres-link">Thrillers</a>*/}
      {/*</li>*/}
    </ul>
  );
}

export default genresFilter;
