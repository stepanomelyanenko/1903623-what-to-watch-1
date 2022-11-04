import { playerControl } from '../../const';
import PlayerControl from '../player-control/player-control';

type PlayerControlPauseProps = {
  onClick?: () => void;
}

export default function PlayerControlPause({onClick}: PlayerControlPauseProps):JSX.Element {
  const {className, desc, height, width, xlinkHref} = playerControl.Pause;

  return(
    <PlayerControl onClick={onClick} className={className} desc={desc} height={height} width={width} xlinkHref={xlinkHref}/>
  );
}
