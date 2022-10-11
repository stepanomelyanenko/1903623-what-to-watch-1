import {FilmPageTabs} from '../../const';
import {useAppDispatch} from '../../hooks';
import {changeFilmTab} from '../../store/action';

type tabsPops = {
  currentTab: string;
}
function FilmTabs ({currentTab}: tabsPops): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${currentTab === FilmPageTabs.Overview && 'film-nav__item--active'}`}>
          <a
            href="/"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab({currentTab: FilmPageTabs.Overview}));
              }
            }
          >
            {FilmPageTabs.Overview}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === FilmPageTabs.Details && 'film-nav__item--active'}`}>
          <a
            href="/"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab({currentTab: FilmPageTabs.Details}));
              }
            }
          >
            {FilmPageTabs.Details}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === FilmPageTabs.Reviews && 'film-nav__item--active'}`}>
          <a
            href="/"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                dispatch(changeFilmTab({currentTab: FilmPageTabs.Reviews}));
              }
            }
          >
            {FilmPageTabs.Reviews}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default FilmTabs;
