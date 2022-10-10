import {DEFAULT_GENRE, GenresArray} from '../../const';
import {useAppDispatch} from '../../hooks';
import {changeGenre} from '../../store/action';
import {MouseEvent, useState} from 'react';

function GenresFilter(): JSX.Element {
  const [currentGenre, setCurrentGenre] = useState(DEFAULT_GENRE);

  const dispatch = useAppDispatch();

  const handleChangeGenreClick = (evt: MouseEvent<HTMLAnchorElement>, genre: string) => {
    evt.preventDefault();
    dispatch(changeGenre({currentGenre: genre}));
    setCurrentGenre(genre);
  };


  return (
    <ul className="catalog__genres-list">
      {GenresArray.map((genre) => (
        <li
          className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`}
          key={genre}
        >
          <a
            href="/"
            className="catalog__genres-link"
            onClick={(evt) => handleChangeGenreClick(evt, genre)}
          >
            {genre}
          </a>
        </li>))}
    </ul>
  );
}

export default GenresFilter;
