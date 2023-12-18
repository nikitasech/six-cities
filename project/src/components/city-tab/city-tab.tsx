import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CityName } from '../../types/city-name';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setActiveCity } from '../../store/actions';
import cn from 'classnames';

export enum PlaceCityTab {
  TABS = 'tabs',
  FAVORITE = 'favorite'
}

type CityTabProps = {
  place?: PlaceCityTab;
  name: CityName;
  isActive?: boolean;
}

export default function CityTab({
  place = PlaceCityTab.TABS,
  name,
  isActive
}: CityTabProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleCityClick = () => {
    dispatch(setActiveCity(name));
  };

  const RootHTMLTag = place === PlaceCityTab.TABS
    ? 'li'
    : 'div';

  const linkClasses = cn('locations__item-link', {
    'tabs__item': place === PlaceCityTab.TABS,
    'tabs__item--active': place === PlaceCityTab.TABS && isActive
  });

  return (
    <RootHTMLTag className="locations__item">
      <Link className={linkClasses} to={AppRoute.Root} onClick={handleCityClick}>
        <span>{name}</span>
      </Link>
    </RootHTMLTag>
  );
}
