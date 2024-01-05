import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoute } from '../const';
import MainScreen from './main-screen/main-screen';
import { city } from '../mocks/city';
import PrivateRoute from '../components/private-route/private-route';
import FavoritesScreen from './favorites-screen/favorites-screen';
import LoginScreen from './login-screen/login-screen';
import OfferScreen from './offer-screen/offer-screen';
import NotFoundScreen from './not-found-screen/not-found-screen';

const router = createBrowserRouter([
  {
    path: AppRoute.Root,
    element: <MainScreen city={city} />,
    errorElement: <NotFoundScreen />,
  },
  {
    path: AppRoute.Favorites,
    element: <PrivateRoute><FavoritesScreen /></PrivateRoute>
  },
  {
    path: AppRoute.Login,
    element: <LoginScreen />
  },
  {
    path: `${AppRoute.Offer}/:id`,
    element: <OfferScreen />
  }
]);

export default function Routing(): JSX.Element {
  return <RouterProvider router={router} />;
}
