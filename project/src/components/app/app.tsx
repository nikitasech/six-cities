import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute, AuthStatus } from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { Offer } from '../../types/offer';
import { City } from '../../types/city';

type AppProps = {
  offers: Offer[];
  city: City;
}

export default function App({ city, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen city={city} offers={offers} />}
        />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authStatus={AuthStatus.Auth}>
            <FavoritesScreen offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
