import ConvertRates from '../../utils/convertRates';

type OverviewProps = {
  rating: number,
  scoresCount: number,
  description: string,
  director: string,
  starring: string[]

}

function Overview(props: OverviewProps): JSX.Element {
  const {rating, scoresCount, description, director, starring} = props;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ConvertRates(rating)}</span>
          <span className="film-rating__count">{scoresCount}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default Overview;
