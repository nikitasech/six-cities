import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute, TypeCard } from '../../const';
import { Offer } from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  type?: TypeCard;
  onMouseMove?: (id: number) => void;
  onMouseLeave?: () => void;
}

export default function OfferCard({
  offer,
  type = TypeCard.Cities,
  onMouseMove,
  onMouseLeave
}: OfferCardProps): JSX.Element {
  const articleClasses = classNames('place-card', {
    'favorites__card': type === TypeCard.Favorite,
    'cities__place-card': type === TypeCard.Cities
  });

  const premiumMark = offer.isPremium
    ? <div className="place-card__mark"><span>Premium</span></div>
    : null;

  const previewClasses = classNames('place-card__image-wrapper', {
    'favorites__image-wrapper': type === TypeCard.Favorite,
    'cities__image-wrapper': type === TypeCard.Cities
  });

  const PreviewSize = {
    WIDTH: type === TypeCard.Favorite ? 150 : 260,
    HEIGHT: type === TypeCard.Favorite ? 110 : 200
  };

  const infoClasses = classNames('place-card__info', {
    'favorites__card-info': type === TypeCard.Favorite
  });

  const bookmarkClasses = classNames('place-card__bookmark-button', 'button', {
    'place-card__bookmark-button--active': offer.isFavorite
  });

  const ratingPercentage = offer.rating / 5 * 100;
  const linkToOffer = `${AppRoute.Offer}/${offer.id}`;

  return (
    <article className={articleClasses}
      onMouseMove={() => onMouseMove ? onMouseMove : null}
      onMouseLeave={() => onMouseLeave ? onMouseLeave : null}
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
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingPercentage}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkToOffer}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
