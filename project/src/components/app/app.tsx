import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import Promo from '../../types/promo';
import Films from '../../types/films';
import Reviews from '../../types/reviews';
import Similar from '../../types/similar';
import Favorite from '../../types/favorite';
import {useAppSelector} from '../../hooks';
import {isCheckedAuth} from '../../utils/check-auth';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type AppProps = {
  promo: Promo,
  films: Films,
  reviews: Reviews,
  similar: Similar,
  favorite: Favorite
}

function App(props: AppProps): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen promo={props.promo} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyListScreen myList={props.favorite}/>
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
            element={<FilmScreen films={props.films} reviews={props.reviews} similar={props.similar}/>}
          >
          </Route>
          <Route
            path={`:id${AppRoute.AddReview}`}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
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
    </BrowserRouter>
  );
}

export default App;
