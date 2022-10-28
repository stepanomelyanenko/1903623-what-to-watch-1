import {useAppSelector} from '../../hooks';

import FilmTabs from '../film-tabs/film-tabs';
import Overview from '../overview/overview';
import Details from '../details/details';
import ReviewList from '../review-list/review-list';

import Film from '../../types/film';
import Reviews from '../../types/reviews';
import {FilmPageTabs} from '../../const';

type FilmDescProps = {
  film: Film | null,
  reviews: Reviews
}

function FilmDescription ({film, reviews}: FilmDescProps): JSX.Element {
  const currentTab = useAppSelector((state) => state.filmPageTab);

  if (!film) {
    return (
      <div className="film-card__desc">
        <FilmTabs currentTab={currentTab} />
      </div>
    );
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

      {currentTab === FilmPageTabs.Reviews && <ReviewList reviews={reviews} />}
    </div>
  );
}

export default FilmDescription;
