import ConvertDate from '../../utils/convert-date';

type ReviewCardProps = {
  comment: string,
  date: string,
  rating: number,
  user: {
    id: number,
    name: string
  }
}

function ReviewCard(props: ReviewCardProps): JSX.Element {
  const {comment, date, rating, user} = props;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={ConvertDate(date, true)}>{ConvertDate(date, false)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewCard;
