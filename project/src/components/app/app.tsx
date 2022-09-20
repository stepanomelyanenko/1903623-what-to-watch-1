import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
//import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';

type headFilm = {
  title: string,
  genre: string,
  year: number
}

function App(HeadFilmProps: headFilm): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen headFilm = {HeadFilmProps} />}
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
            element={<FilmScreen />}
          >
            {/*<Route*/}
            {/*  path={AppRoute.AddReview}*/}
            {/*  element={<AddReviewScreen />}*/}
            {/*/>*/}
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
