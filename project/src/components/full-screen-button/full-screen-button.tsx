import {checkFullScreen, CombinedElement, exitFullScreen, requestFullScreen} from '../../utils/full-screen-api';

export const FullScreenButton = (): JSX.Element => {
  const element = document.querySelector('.player') as CombinedElement;

  const onFullScreenClick = () => {

    if (checkFullScreen()) {
      exitFullScreen();
    } else {
      requestFullScreen(element);
    }
  };

  return (
    <button type="button" className="player__full-screen" onClick={onFullScreenClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
};
