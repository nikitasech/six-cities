import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authStatus);

  return authStatus === AuthStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />;
}
