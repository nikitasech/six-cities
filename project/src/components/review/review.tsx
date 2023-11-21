import { Review as TReview } from '../../types/review';
import Rating, { PlaceRating } from '../rating/rating';

type ReviewProps = {
  review: TReview;
};

export default function Review({ review }: ReviewProps): JSX.Element {
  const { user, rating, comment, date } = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating place={PlaceRating.REVIEW} rating={rating} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
}
