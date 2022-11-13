import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {
  fetchCommentsByID,
  fetchFavoriteFilmsAction,
  fetchFilmByID,
  fetchSimilarByID
} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';

import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import FilmDescription from '../../components/film-description/film-description';
import SimilarList from '../../components/similar-list/similar-list';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

import {AuthorizationStatus, favoriteClickType, FilmPageTabs} from '../../const';
import {getFilm, getIsFilmFoundStatus, getIsFilmLoadingStatus, getSimilar} from '../../store/film-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {changeFilmTab} from '../../store/film-data/film-data';
import {getFavoriteCount} from '../../store/main-data/selectors';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';

function FilmScreen(): JSX.Element {
  const id = Number(useParams().id);

  const film = useAppSelector(getFilm);
  const similar = useAppSelector(getSimilar);

  const authStatus = useAppSelector(getAuthorizationStatus);

  const isFilmFoundStatus = useAppSelector(getIsFilmFoundStatus);
  const isFilmLoadingStatus = useAppSelector(getIsFilmLoadingStatus);

  const favoriteCount = useAppSelector(getFavoriteCount);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeFilmTab(FilmPageTabs.Overview));
    dispatch(fetchFilmByID(id.toString()));
    dispatch(fetchCommentsByID(id.toString()));
    dispatch(fetchSimilarByID(id.toString()));

    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }

  }, [id, authStatus, dispatch]);

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

              <FilmCardButtons
                id={id}
                authStatus={authStatus}
                film={film}
                favoriteCount={favoriteCount}
                favoriteType={favoriteClickType.Film}
              />
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
