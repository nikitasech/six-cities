import { Link } from 'react-router-dom';
import { AppRoute, cities } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setActiveCity } from '../../store/actions';
import { CityName } from '../../types/city-name';

export default function CityTabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.activeCity);
  const handleCityClick = (name: CityName) => () => dispatch(setActiveCity(name));

  return (
    <section className="locations container">
      <div className="tabs">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const activeClass = activeCity === city
              ? 'tabs__item--active'
              : '';

            return (
              <li className="locations__item" key={city}>
                <Link className={`locations__item-link tabs__item' ${activeClass}`} to={AppRoute.Root} onClick={handleCityClick(city)}>
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
