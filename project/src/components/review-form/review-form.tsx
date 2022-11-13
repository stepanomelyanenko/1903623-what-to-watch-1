import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {UserComment} from '../../types/user-comment';
import {postComment} from '../../store/api-actions';

function ReviewForm(): JSX.Element {
  const id = Number(useParams().id);

  const [formData, setFormData] = useState({
    rating: NaN,
    reviewText: '',
  });

  const [isDisabledByText, setIsDisabledByText] = useState(true);
  const [isDisabledByRate, setIsDisabledByRate] = useState(true);

  const dispatch = useAppDispatch();

  const textareaChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, reviewText: evt.target.value});

    if (evt.target.value.length >= 50 && evt.target.value.length <= 400) {
      setIsDisabledByText(false);
    } else {
      setIsDisabledByText(true);
    }
  };

  const ratingChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, rating: parseInt(evt.target.value, 10)});
    if (evt.target.value) {
      setIsDisabledByRate(false);
    } else {
      setIsDisabledByRate(true);
    }
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({comment: formData.reviewText, rating: formData.rating, filmId: id.toString()});
  };

  const onSubmit = (commentData: UserComment) => {
    dispatch(postComment(commentData));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {
              [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => (
                <Fragment key={number}>
                  <input
                    className="rating__input"
                    id={`star-${number}`}
                    key={number}
                    type="radio"
                    name="rating"
                    value={number}
                    onChange={ratingChangeHandle}
                    checked={formData.rating === number}
                  />
                  <label className="rating__label" htmlFor={`star-${number}`}>Rating {number}</label>
                </Fragment>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            placeholder="Review text"
            onChange={textareaChangeHandle}
            value={formData.reviewText}
            maxLength={400}
          >

          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={isDisabledByRate || isDisabledByText}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
