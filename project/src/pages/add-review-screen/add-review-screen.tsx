import Logo from '../../components/logo/logo';
import ReviewForm from '../../components/review-form/review-form';
import {AppRoute} from '../../const';
import {Link, useParams} from 'react-router-dom';
import UserBlock from '../../components/user-block/user-block';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFilmByID} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import {getLoadedDataStatus} from '../../store/main-data/selectors';
import {getFilm} from '../../store/film-data/selectors';

function AddReviewScreen(): JSX.Element {
  const id = Number(useParams().id);

  const film = useAppSelector(getFilm);
  const loadStatus = useAppSelector(getLoadedDataStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmByID(id.toString()));
  }, [id, dispatch]);

  if (loadStatus) {
    return(<LoadingScreen />);
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo isLightVersion={false}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film}/${id}`} className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`${AppRoute.Film}/${id}${AppRoute.AddReview}`}>
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327"/>
        </div>
      </div>
      <ReviewForm />

    </section>
  );
}

export default AddReviewScreen;
