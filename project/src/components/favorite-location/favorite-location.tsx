import { Link } from 'react-router-dom';
import { AppRoute, Location } from '../../const';
import { Offer } from '../../types/offer';
import OfferCard, { PlaceOfferCard } from '../offer-card/offer-card';

type FavoriteLocationProps = {
  location: Location;
  offers: Offer[];
}

export default function FavoriteLocation({location, offers}: FavoriteLocationProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Root}>
            <span>{location}</span>
          </Link>
        </div>
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
