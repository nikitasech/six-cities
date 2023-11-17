import Header from '../../components/header/header';
import Map, { PlaceMap } from '../../components/map/map';
import { offers } from '../../mocks/offers';
import { city } from '../../mocks/city';
import OfferCard, { PlaceOfferCard } from '../../components/offer-card/offer-card';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import Bookmark, { PlaceBookmark } from '../../components/bookmark/boormark';
import Rating, { PlaceRating } from '../../components/rating/rating';
import OfferGoods from '../../components/offer-goods/offer-goods';
import Reviews from '../../components/reviews/reviews';
import { reviews } from '../../mocks/reviews';

export default function OfferScreen(): JSX.Element {
  const isRenderNav = true;
  const currentOffer = offers[0];
  const nearOffers = offers.slice(1);

  const hostAvatarClasses = `property__avatar-wrapper user__avatar-wrapper ${currentOffer.host.isPro
    ? 'property__avatar-wrapper--pro'
    : ''}`;

  return (
    <div className="page">
      <Header isRenderNav={isRenderNav} />
      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery sources={currentOffer.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{currentOffer.title}</h1>
                <Bookmark place={PlaceBookmark.OFFER} isActive={currentOffer.isFavorite} />
              </div>
              <Rating place={PlaceRating.OFFER} rating={currentOffer.rating}/>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{currentOffer.type}</li>
                <li className="property__feature property__feature--bedrooms">{currentOffer.bedrooms} Bedrooms</li>
                <li className="property__feature property__feature--adults">Max {currentOffer.maxAdults} adults</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <OfferGoods goods={currentOffer.goods} />
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={hostAvatarClasses}>
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{currentOffer.host.name}</span>
                  {currentOffer.host.isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">{currentOffer.description}</p>
                </div>
              </div>
              <Reviews reviews={reviews} />
            </div>
          </div>
          <Map place={PlaceMap.OFFER} city={city} offers={offers} activeOffer={currentOffer} />
        </section>
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
