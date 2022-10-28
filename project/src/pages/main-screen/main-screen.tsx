import Logo from '../../components/logo/logo';
import PromoCard from '../../components/promo-card/promo-card';
import FilmList from '../../components/film-list/film-list';

function MainScreen(): JSX.Element {
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
