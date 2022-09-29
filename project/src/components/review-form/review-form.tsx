import {ChangeEvent, useState} from 'react';

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: 8,
    reviewText: '',
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, reviewText: evt.target.value});
    // const {name, value} = evt.target;
    // setFormData({...formData, [name]: value});
    console.log(formData);
  };

  const ratingChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, rating: parseInt(evt.target.value, 10)});
    // const {name, value} = evt.target;
    // setFormData({...formData, [name]: parseInt(value)});
    console.log(formData);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">

            {
              [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => (
                <>
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
                </>
              ))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={fieldChangeHandle}
            value={formData.reviewText}
          >

          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
