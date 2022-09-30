import Reviews from '../../types/reviews';
import ReviewCard from '../review-card/review-card';

type ReviewsProps = {
  reviews: Reviews
}

function ReviewList({reviews}: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            comment={review.comment}
            date={review.date}
            rating={review.rating}
            user={review.user}
          />))}
      </div>
    </div>
  );
}

export default ReviewList;
