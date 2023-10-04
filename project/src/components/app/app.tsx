import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute } from '../../const';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

type AppProps = {
  propertyCount: number;
}

function App({ propertyCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen propertyCount={propertyCount} />} />
        <Route path={AppRoute.Favorites} element={<FavoritesScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={`${AppRoute.Offer}/:id`} element={<PropertyScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
