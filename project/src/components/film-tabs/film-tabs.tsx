import {FilmPageTabs} from '../../const';

type FilmTabsProps = {
  currentTab: string,
  updateTab: (a: string) => void
};

function FilmTabs ({updateTab, currentTab}: FilmTabsProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={`film-nav__item ${currentTab === FilmPageTabs.Overview && 'film-nav__item--active'}`}>
          <a
            href="#"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                updateTab(FilmPageTabs.Overview);
              }
            }
          >
            {FilmPageTabs.Overview}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === FilmPageTabs.Details && 'film-nav__item--active'}`}>
          <a
            href="#"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                updateTab(FilmPageTabs.Details);
              }
            }
          >
            {FilmPageTabs.Details}
          </a>
        </li>
        <li className={`film-nav__item ${currentTab === FilmPageTabs.Reviews && 'film-nav__item--active'}`}>
          <a
            href="#"
            className="film-nav__link"
            onClick={
              (evt) => {
                evt.preventDefault();
                updateTab(FilmPageTabs.Reviews);
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
