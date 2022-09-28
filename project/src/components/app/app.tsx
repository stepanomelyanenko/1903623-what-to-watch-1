import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
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
import Film from '../../types/film';
import Reviews from '../../types/reviews';
import Similar from '../../types/similar';

type AppProps = {
  promo: Promo,
  films: Films,
  film: Film,
  reviews: Reviews,
  similar: Similar
}

function App(props: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen promo={props.promo} films={props.films} />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
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
            element={<FilmScreen film={props.film} reviews={props.reviews} similar={props.similar}/>}
          >
          </Route>
          <Route
            path={`:id${AppRoute.AddReview}`}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
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
