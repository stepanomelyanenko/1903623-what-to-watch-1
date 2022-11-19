import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppDispatch} from '../../hooks';
import {resetMainScreen} from '../../store/main-data/main-data';

type LogoProps = {
  isLightVersion: boolean;
}

function Logo({isLightVersion}: LogoProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="logo">
      <Link
        className={isLightVersion ? 'logo__link logo__link--light' : 'logo__link'}
        to={AppRoute.Root}
        onClick={
          () => {
            dispatch(resetMainScreen());
          }
        }
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
