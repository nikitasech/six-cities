import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import ListMap from '../map/map';
import { City } from '../../types/city';

type OffersListProps = {
  city: City;
  offers: Offer[];
}

export default function OffersList({city, offers}: OffersListProps): JSX.Element {
  // eslint-disable-next-line no-unused-expressions, @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<number|null>(null);

  const handleOfferMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleOfferMouseLeave = () => {
    setActiveOffer(null);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                onMouseMove={handleOfferMouseMove}
                onMouseLeave={handleOfferMouseLeave}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <ListMap city={city} />
        </div>
      </div>
    </div>
  );
}
