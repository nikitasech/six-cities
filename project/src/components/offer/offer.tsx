import { Offer as TOffer } from '../../types/offer';
import OfferGallery from '../offer-gallery/offer-gallery';
import Bookmark, { PlaceBookmark } from '../bookmark/boormark';
import Rating, { PlaceRating } from '../rating/rating';
import OfferGoods from '../offer-goods/offer-goods';
import Reviews from '../reviews/reviews';
import Map, { PlaceMap } from '../map/map';
import { reviews } from '../../mocks/reviews';

type OfferProps = {
  currentOffer: TOffer;
  nearOffers: TOffer[];
}

export function Offer({ currentOffer, nearOffers }: OfferProps): JSX.Element {
  const hostAvatarClasses = `property__avatar-wrapper user__avatar-wrapper ${currentOffer.host.isPro
    ? 'property__avatar-wrapper--pro'
    : ''}`;

  return (
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
      <Map place={PlaceMap.OFFER} offers={[currentOffer, ...nearOffers]} activeOffer={currentOffer} />
    </section>
  );
}
