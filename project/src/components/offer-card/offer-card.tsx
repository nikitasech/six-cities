import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { MouseEvent } from 'react';
import Rating, { PlaceRating } from '../rating/rating';

export enum PlaceOfferCard {
  MAIN = 'cities',
  NEAR = 'near',
  FAVORITES = 'favorites'
}

type OfferCardProps = {
  offer: Offer;
  place?: PlaceOfferCard;
  setActiveOffer?: (offer: Offer | null) => void;
}

export default function OfferCard({
  offer,
  place = PlaceOfferCard.MAIN,
  setActiveOffer
}: OfferCardProps): JSX.Element {
  const articleClasses = classNames('place-card', {
    'favorites__card': place === PlaceOfferCard.FAVORITES,
    'cities__place-card': place === PlaceOfferCard.MAIN,
    'near-places__card': place === PlaceOfferCard.NEAR

  });

  const premiumMark = offer.isPremium
    ? <div className="place-card__mark"><span>Premium</span></div>
    : null;

  const previewClasses = classNames('place-card__image-wrapper', {
    'favorites__image-wrapper': place === PlaceOfferCard.FAVORITES,
    'cities__image-wrapper': place === PlaceOfferCard.MAIN,
    'near-places__image-wrapper': place === PlaceOfferCard.NEAR
  });

  const PreviewSize = {
    WIDTH: place === PlaceOfferCard.FAVORITES ? 150 : 260,
    HEIGHT: place === PlaceOfferCard.FAVORITES ? 110 : 200
  };

  const infoClasses = classNames('place-card__info', {
    'favorites__card-info': place === PlaceOfferCard.FAVORITES
  });

  const bookmarkClasses = classNames('place-card__bookmark-button', 'button', {
    'place-card__bookmark-button--active': offer.isFavorite
  });

  const linkToOffer = `${AppRoute.Offer}/${offer.id}`;

  const handleMouseEvent = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    if (setActiveOffer) {
      setActiveOffer((evt.type === 'mouseenter') ? offer : null);
    }
  };

  return (
    <article
      className={articleClasses}
      onMouseEnter={handleMouseEvent.bind(OfferCard)}
      onMouseLeave={handleMouseEvent}
    >
      {premiumMark}
      <div className={previewClasses}>
        <Link to={linkToOffer}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={PreviewSize.WIDTH}
            height={PreviewSize.HEIGHT}
            alt="Place"
          />
        </Link>
      </div>
      <div className={infoClasses}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkClasses} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating place={PlaceRating.CARD} rating={offer.rating} />
        <h2 className="place-card__name">
          <Link to={linkToOffer}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
