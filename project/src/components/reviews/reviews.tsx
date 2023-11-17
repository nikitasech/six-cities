import Review from '../review/review';
import { Review as TReview } from '../../types/review';
import FormReview from '../form-review/form-review';

type ReviewsProps = {
  reviews: TReview[];
};

export default function Reviews({ reviews }: ReviewsProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      <FormReview />
    </section>
  );
}
