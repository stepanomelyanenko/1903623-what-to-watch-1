import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';

import browserHistory from '../../browser-history';
import HistoryRouter from '../history-route/history-route';

import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';

import {useAppSelector} from '../../hooks';
import {isCheckedAuth} from '../../utils/check-auth';

import {getAuthorizationStatus} from '../../store/user-process/selectors';
// import {getLoadedDataStatus} from '../../store/main-data/selectors';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  // const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (isCheckedAuth(authorizationStatus)) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <>
      {/*{isDataLoaded || <LoadingScreen /> }*/}
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInScreen />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyListScreen />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Player}>
            <Route
              path={':id'}
              element={<PlayerScreen />}
            />
          </Route>
          <Route path={AppRoute.Film}>
            <Route
              path={':id'}
              element={<FilmScreen />}
            >
            </Route>
            <Route
              path={`:id${AppRoute.AddReview}`}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <AddReviewScreen />
                </PrivateRoute>
              }
            >
            </Route>
          </Route>
          <Route
            path={'*'}
            element={<NotFoundScreen />}
          />
        </Routes>
      </HistoryRouter>
    </>
  );
}

export default App;
