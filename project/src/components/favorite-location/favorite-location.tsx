import OfferCard, { PlaceOfferCard } from '../offer-card/offer-card';
import { CityName } from '../../types/city-name';
import CityTab, { PlaceCityTab } from '../city-tab/city-tab';
import { useAppSelector } from '../../hooks/use-app-selector';

type FavoriteLocationProps = {
  cityName: CityName;
}

export default function FavoriteLocation({ cityName }: FavoriteLocationProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <CityTab place={PlaceCityTab.FAVORITE} name={cityName} />
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            place={PlaceOfferCard.FAVORITES}
            offer={offer}
          />
        ))}
      </div>
    </li>
  );
}
