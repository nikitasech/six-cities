import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { logout } from '../../store/thunk-actions';

export default function HeaderNav(): JSX.Element {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(((state) => state.user?.email));
  const authStatus = useAppSelector((state) => state.authStatus);

  const userSpanClasses = authStatus === AuthStatus.Auth
    ? 'header__user-name user__name'
    : 'header__login';

  const userSpanContent = authStatus === AuthStatus.Auth
    ? userEmail
    : 'Sign in';


  const handleLogoutClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className={userSpanClasses}>{userSpanContent}</span>
          </Link>
        </li>
        {
          authStatus === AuthStatus.Auth
          &&
          <li className="header__nav-item">
            <Link className="header__nav-link" to={window.location.pathname} onClick={handleLogoutClick}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        }
      </ul>
    </nav>
  );
}
