import OffersList from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';
import { City } from '../../types/city';
import CityTabs from '../../components/city-tabs/city-tabs';

type MainScreenProps = {
  city: City;
};

export default function MainScreen({ city }: MainScreenProps): JSX.Element {
  const isRenderNav = true;

  return (
    <div className="page page--gray page--main">
      <Header isRenderNav={isRenderNav} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <OffersList city={city} />
      </main>
    </div>
  );
}

