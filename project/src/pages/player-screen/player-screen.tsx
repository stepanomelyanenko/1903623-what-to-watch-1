import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFilm, getIsFilmFoundStatus, getIsFilmLoadingStatus} from '../../store/film-data/selectors';
import {MutableRefObject, useEffect, useRef, useState} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {fetchFilmByID} from '../../store/api-actions';
import {useNavigate, useParams} from 'react-router-dom';
import {resetMainScreen} from '../../store/main-data/main-data';
import {FullScreenButton} from '../../components/full-screen-button/full-screen-button';

function PlayerScreen(): JSX.Element {
  const id = Number(useParams().id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const player = useRef() as MutableRefObject<HTMLVideoElement>;

  const film = useAppSelector(getFilm);

  const isFilmFoundStatus = useAppSelector(getIsFilmFoundStatus);
  const isFilmLoadingStatus = useAppSelector(getIsFilmLoadingStatus);

  const [videoFullTime, setVideoTime] = useState(0);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  const [playing, setPlaying] = useState(false);

  const getVideoTimeLeft = (fullTime: number, currentTime: number) => {
    const timeLeft = fullTime - currentTime;
    return `${Math.floor(timeLeft / 60)}:${(`0${Math.floor(timeLeft % 60)}`).slice(-2)}`;
  };

  const exitPlayer = () => {
    dispatch(resetMainScreen());
    navigate(-1);
  };

  const handleClickPause = () => {
    player.current.pause();
    setPlaying(false);
  };

  const handleClickPlay = () => {
    player.current.play();
    setPlaying(true);
  };

  useEffect(() => {
    dispatch(fetchFilmByID(id.toString()));
  }, [id, dispatch]);

  if(player.current) {
    player.current.ontimeupdate = () => {
      setVideoCurrentTime(player.current?.currentTime);
      setVideoProgress((player.current?.currentTime / videoFullTime) * 100);
    };
  }

  useEffect(() => {
    if(player.current) {
      setVideoTime(player.current.duration);
    }
  }, [playing]);

  if (isFilmLoadingStatus) {
    return <LoadingScreen />;
  }

  if (!isFilmFoundStatus) {
    return <NotFoundScreen />;
  }

  return (
    <div className="player">
      <video ref={player} autoPlay src={film?.videoLink} id="video" className="player__video" poster={film?.backgroundImage} onPlay={() => setPlaying(true)}></video>

      <button type="button" className="player__exit" onClick={exitPlayer}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={videoProgress} max="100"></progress>
            <div className="player__toggler" style={{left: `${videoProgress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">-{videoFullTime && videoCurrentTime ? getVideoTimeLeft(videoFullTime, videoCurrentTime) : '0:00:00'}</div>
        </div>

        <div className="player__controls-row">
          {playing ? (
            <button type="button" className="player__play" onClick={handleClickPause}>
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          ) : (
            <button type="button" className="player__play" onClick={handleClickPlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
          )}

          <div className="player__name">{film?.name}</div>

          <FullScreenButton />

        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
