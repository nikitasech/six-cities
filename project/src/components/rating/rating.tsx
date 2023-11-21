export enum PlaceRating {
  CARD = 'place-card',
  OFFER = 'property',
  REVIEW = 'reviews'
}

type RatingProps = {
  place?: PlaceRating;
  rating: number;
}

export default function Rating({
  place = PlaceRating.CARD,
  rating
}: RatingProps): JSX.Element {
  const ratingPercentage = rating / 5 * 100;

  return (
    <div className={`${place}__rating rating`}>
      <div className={`${place}__stars rating__stars`}>
        <span style={{ width: ratingPercentage }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {(place === PlaceRating.OFFER) && <span className="property__rating-value rating__value">{rating}</span>}
    </div>
  );
}
