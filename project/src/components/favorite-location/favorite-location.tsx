import { Offer } from '../../types/offer';
import OfferCard, { PlaceOfferCard } from '../offer-card/offer-card';
import { CityName } from '../../types/city-name';
import CityTab, { PlaceCityTab } from '../city-tab/city-tab';

type FavoriteLocationProps = {
  cityName: CityName;
  offers: Offer[];
}

export default function FavoriteLocation({ cityName, offers }: FavoriteLocationProps): JSX.Element {
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
