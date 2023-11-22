import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Locations(): JSX.Element {
  return (
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
  );
}
