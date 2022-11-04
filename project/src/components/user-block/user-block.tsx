import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus, getAvatarUrl} from '../../store/user-process/selectors';

function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const avatar = useAppSelector(getAvatarUrl);
  const authStatus = useAppSelector(getAuthorizationStatus);

  if (authStatus !== AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link
            className="user-block__link"
            to={`${AppRoute.SignIn}`}
          >
            Login
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList}>
            <img src={avatar || ''} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link
          className="user-block__link"
          to={AppRoute.Root}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          Sign out
        </Link>
      </li>
    </ul>
  );
}

export default UserBlock;
