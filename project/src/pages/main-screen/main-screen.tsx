import Logo from '../../components/logo/logo';
import PromoCard from '../../components/promo-card/promo-card';
import FilmList from '../../components/film-catalog/film-list';
import Promo from '../../types/promo';
import Films from '../../types/films';

type MainScreenProps = {
  promo: Promo,
  films: Films
}

function MainScreen(props: MainScreenProps): JSX.Element {
  return (
    <>
      <PromoCard promo={props.promo} />

      <div className="page-content">
        <FilmList films={props.films} />

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
