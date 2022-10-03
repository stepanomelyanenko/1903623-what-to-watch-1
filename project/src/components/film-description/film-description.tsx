import FilmTabs from '../film-tabs/film-tabs';
import Overview from '../overview/overview';
import Details from '../details/details';
import ReviewList from '../review-list/review-list';
import Film from '../../types/film';
import Reviews from '../../types/reviews';
import {useState} from 'react';
import {FilmPageTabs} from '../../const';

type FilmDescProps = {
  film: Film,
  reviews: Reviews
}

function FilmDescription ({film, reviews}: FilmDescProps): JSX.Element {
  const [pageTab, setPageTab] = useState<string>(FilmPageTabs.Overview);

  return (
    <div className="film-card__desc">
      <FilmTabs
        currentTab={pageTab}
        updateTab={(tabName: string) => {
          setPageTab(tabName);
        }}
      />

      {pageTab === FilmPageTabs.Overview &&
        <Overview
          rating={film.rating}
          scoresCount={film.scoresCount}
          description={film.description}
          director={film.director}
          starring={film.starring}
        />}

      {pageTab === FilmPageTabs.Details &&
        <Details
          director={film.director}
          starring={film.starring}
          runTime={film.runTime}
          genre={film.genre}
          released={film.released}
        />}

      {pageTab === FilmPageTabs.Reviews && <ReviewList reviews={reviews}/>}
    </div>
  );
}

export default FilmDescription;
