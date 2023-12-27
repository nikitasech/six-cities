import Header from '../../components/header/header';
import { offers } from '../../mocks/offers';
import OfferCard, { PlaceOfferCard } from '../../components/offer-card/offer-card';
import { Offer } from '../../components/offer/offer';

export default function OfferScreen(): JSX.Element {
  const isRenderNav = true;
  const currentOffer = offers[0];
  const nearOffers = offers.slice(1);

  return (
    <div className="page">
      <Header isRenderNav={isRenderNav} />
      <main className="page__main page__main--property">
        <Offer currentOffer={currentOffer} nearOffers={nearOffers} />
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearOffers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  place={PlaceOfferCard.NEAR}
                  offer={offer}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
