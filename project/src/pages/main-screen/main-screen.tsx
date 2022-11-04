import Logo from '../../components/logo/logo';
import PromoCard from '../../components/promo-card/promo-card';
import FilmList from '../../components/film-list/film-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {getAuthorizationStatus, getUserId} from '../../store/user-process/selectors';
import {AuthorizationStatus} from '../../const';


function MainScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  //const userId = useAppSelector(getUserId);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      // dispatch(fetchFavoriteFilmsAction());
      console.log('USER EFFECT IS HAPPENED (on main)');
    }
  }, [authStatus, dispatch]);

  return (
    <>
      <PromoCard />

      <div className="page-content">
        <FilmList />

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

export default MainScreen;
