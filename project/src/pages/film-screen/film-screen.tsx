import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import {fetchCommentsByID, fetchFilmByID, fetchSimilarByID} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';

import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import FilmDescription from '../../components/film-description/film-description';
import SimilarList from '../../components/similar-list/similar-list';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import {AppRoute, AuthorizationStatus, FilmPageTabs} from '../../const';
import {
  getFilm,
  getIsFilmFoundStatus,
  getIsFilmLoadingStatus,
  getSimilar
} from '../../store/film-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {changeFilmTab} from '../../store/film-data/film-data';

function FilmScreen(): JSX.Element {
  const id = Number(useParams().id);

  const film = useAppSelector(getFilm);
  const similar = useAppSelector(getSimilar);

  const authStatus = useAppSelector(getAuthorizationStatus);

  const isFilmFoundStatus = useAppSelector(getIsFilmFoundStatus);
  const isFilmLoadingStatus = useAppSelector(getIsFilmLoadingStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeFilmTab(FilmPageTabs.Overview));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchCommentsByID(id.toString()));
    dispatch(fetchSimilarByID(id.toString()));
  }, [id, dispatch]);

  if (isFilmLoadingStatus) {
    return <LoadingScreen />;
  }

  if (!isFilmFoundStatus) {
    return <NotFoundScreen />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLightVersion={false}/>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {
                  authStatus === AuthorizationStatus.Auth &&
                  <Link
                    to={`${AppRoute.Film}/${id}${AppRoute.AddReview}`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
            </div>
            <FilmDescription />
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarList similar={similar} />

        <footer className="page-footer">
          <Logo isLightVersion />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmScreen;
