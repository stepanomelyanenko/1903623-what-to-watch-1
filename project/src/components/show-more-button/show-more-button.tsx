import {useAppDispatch} from '../../hooks';
import {increaseCardCount} from '../../store/action';

type ShowMoreBtnProps = {
  isAllCardsLoaded: boolean;
}

function ShowMoreButton({isAllCardsLoaded}: ShowMoreBtnProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      {
        isAllCardsLoaded &&
        <button
          className="catalog__button"
          type="button"
          onClick={ (evt) => {
            evt.preventDefault();
            dispatch(increaseCardCount());
          }}
        >
          Show more
        </button>
      }
    </div>
  );
}

export default ShowMoreButton;
