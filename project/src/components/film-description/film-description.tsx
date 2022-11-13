import {useAppSelector} from '../../hooks';

import FilmTabs from '../film-tabs/film-tabs';
import Overview from '../overview/overview';
import Details from '../details/details';
import ReviewList from '../review-list/review-list';
import {FilmPageTabs} from '../../const';
import {getComments, getFilm, getFilmPageTab} from '../../store/film-data/selectors';

function FilmDescription (): JSX.Element {
  const currentTab = useAppSelector(getFilmPageTab);
  const film = useAppSelector(getFilm);
  const comments = useAppSelector(getComments);

  if (!film) {
    return <div className="film-card__desc"></div>;
  }

  return (
    <div className="film-card__desc">
      <FilmTabs currentTab={currentTab} />

      {currentTab === FilmPageTabs.Overview &&
        <Overview
          rating={film.rating}
          scoresCount={film.scoresCount}
          description={film.description}
          director={film.director}
          starring={film.starring}
        />}

      {currentTab === FilmPageTabs.Details &&
        <Details
          director={film.director}
          starring={film.starring}
          runTime={film.runTime}
          genre={film.genre}
          released={film.released}
        />}

      {currentTab === FilmPageTabs.Reviews && <ReviewList reviews={comments} />}
    </div>
  );
}

export default FilmDescription;
