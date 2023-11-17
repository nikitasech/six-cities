import cn from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';
import { MouseEvent } from 'react';
import Rating, { PlaceRating } from '../rating/rating';
import Bookmark, { PlaceBookmark } from '../bookmark/boormark';

export enum PlaceOfferCard {
  MAIN = 'cities',
  NEAR = 'near-places',
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
  const linkToOffer = `${AppRoute.Offer}/${offer.id}`;
  const previewClasses = `place-card__image-wrapper ${place}__image-wrapper`;
  const articleClasses = cn('place-card', {
    'cities__place-card': place === PlaceOfferCard.MAIN,
    'near-places__card': place === PlaceOfferCard.NEAR,
    'favorites__card': place === PlaceOfferCard.FAVORITES
  });

  const infoClasses = cn('place-card__info', {
    'favorites__card-info': place === PlaceOfferCard.FAVORITES
  });

  const PreviewSize = {
    WIDTH: place === PlaceOfferCard.FAVORITES ? 150 : 260,
    HEIGHT: place === PlaceOfferCard.FAVORITES ? 110 : 200
  };

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
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
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
          <Bookmark place={PlaceBookmark.CARD} isActive={offer.isFavorite} />
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
