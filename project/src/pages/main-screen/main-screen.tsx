import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import Header from '../../components/header/header';

type MainScreenProps = {
  offers: Offer[];
};

export default function MainScreen({ offers = [] }: MainScreenProps): JSX.Element {
  const isRenderNav = true;

  return (
    <div className="page page--gray page--main">
      <Header isRenderNav={isRenderNav} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to={AppRoute.Root}>
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to={AppRoute.Root}>
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to={AppRoute.Root}>
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item tabs__item--active" to={AppRoute.Root}>
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to={AppRoute.Root}>
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to={AppRoute.Root}>
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <OffersList offers={offers} />
      </main>
    </div>
  );
}

