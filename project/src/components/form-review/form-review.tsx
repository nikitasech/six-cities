import { ChangeEvent, useState } from 'react';
import ReviewRating from '../review-rating/review-rating';

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

type FormData = {
  rating: string;
  review: string;
  isValidity: boolean;
}

export default function FormReview(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
    isValidity: false
  });

  const getIsValidity = ({rating, review}: FormData) => {
    const isRatingValidity = Boolean(rating.length);
    const isReviewValidity = (
      review.length >= MIN_REVIEW_LENGTH
      && review.length <= MAX_REVIEW_LENGTH
    );

    return isRatingValidity && isReviewValidity;
  };

  const handleFormDataChange = (
    evt: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>
  ) => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value,
      isValidity: getIsValidity({...formData, [name]: value})
    });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRating onChange={handleFormDataChange} />
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFormDataChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!formData.isValidity}>Submit</button>
      </div>
    </form>
  );
}
