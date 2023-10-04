import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';

type PrivateRouteProps = {
  authStatus: string;
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authStatus, children} = props;
  return authStatus === AuthStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />;
}
