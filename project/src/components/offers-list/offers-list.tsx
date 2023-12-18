import { useState } from 'react';
import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';
import Map from '../map/map';
import { useAppSelector } from '../../hooks/use-app-selector';
import Sort from '../sort/sort';
import { Comporator } from '../../const';
import { Loader } from '../loader/loader';

export default function OffersList(): JSX.Element {
  const isLoading = useAppSelector((state) => state.isLoading);
  const activeSort = useAppSelector((state) => state.activeFilter);
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers
    .filter((offer) => offer.city.name === activeCity)
    .sort(Comporator[activeSort]));

  const [activeOffer, setActiveOffer] = useState<Offer|null>(null);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay in Amsterdam</b>
          <Sort />
          {isLoading && <Loader />}
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                setActiveOffer={setActiveOffer}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map offers={offers} activeOffer={activeOffer} />
        </div>
      </div>
    </div>
  );
}
