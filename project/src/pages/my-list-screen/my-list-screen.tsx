import Logo from '../../components/logo/logo';
import DevFilmCard from '../../components/dev-film-card/dev-film-card';
import UserBlock from '../../components/user-block/user-block';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteFilms, getLoadedDataStatus} from '../../store/main-data/selectors';
import {useEffect} from 'react';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AuthorizationStatus} from '../../const';
import LoadingScreen from '../loading-screen/loading-screen';

function MyListScreen(): JSX.Element {
  const favorite = useAppSelector(getFavoriteFilms);
  const authStatus = useAppSelector(getAuthorizationStatus);

  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authStatus, dispatch]);

  if (isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLightVersion={false} />

        <h1 className="page-title user-page__title">
          My list<span className="user-page__film-count">{favorite.length}</span>
        </h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {favorite.map((film) => <DevFilmCard key={film.id} id={film.id} title={film.name} image={film.previewImage}/>)}
        </div>
      </section>

      <footer className="page-footer">
        <Logo isLightVersion />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;
