import { cities } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import CityTab from '../city-tab/city-tab';

export default function CityTabs(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);

  return (
    <section className="locations container">
      <div className="tabs">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            const isActiveTab = activeCity === city;
            return <CityTab key={city} name={city} isActive={isActiveTab} />;
          })}
        </ul>
      </div>
    </section>
  );
}
