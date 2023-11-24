import { Link } from 'react-router-dom';
import { AppRoute, cities } from '../../const';

export default function Cities(): JSX.Element {
  const activeCity = cities[3];

  return (
    <section className="locations container">
      <div className="tabs">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const activeClasses = activeCity === city
              ? 'tabs__item--active'
              : '';

            return (
              <li className="locations__item" key={city}>
                <Link className={`locations__item-link tabs__item' ${activeClasses}`} to={AppRoute.Root}>
                  <span>{city}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
