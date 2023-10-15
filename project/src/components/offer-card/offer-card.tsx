import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  onMouseMove: (id: number) => void;
  onMouseLeave: () => void;
}

export default function OfferCard({offer, onMouseMove, onMouseLeave}: OfferCardProps): JSX.Element {
  const bookmarkClassName = `place-card__bookmark-button button ${offer.isFavorite
    ? 'place-card__bookmark-button--active'
    : ''
  }`;
  const premiumMark = offer.isPremium
    ? <div className="place-card__mark"><span>Premium</span></div>
    : null;
  const ratingPercentage = offer.rating / 5 * 100;
  const linkToOffer = `${AppRoute.Offer}/${offer.id}`;

  const handleOfferMouseLeave = onMouseLeave;
  const handleOfferMouseMove = () => {
    onMouseMove(offer.id);
  };

  return (
    <article className="cities__place-card place-card" onMouseMove={handleOfferMouseMove} onMouseLeave={handleOfferMouseLeave}>
      {premiumMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={linkToOffer}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkClassName} type="button">
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
