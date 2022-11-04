import { playerControl } from '../../const';
import PlayerControl from '../player-control/player-control';

export default function PlayerControlFullScreen():JSX.Element {
  const {className, desc, height, width, xlinkHref} = playerControl.FullScreen;

  return(
    <PlayerControl className={className} desc={desc} height={height} width={width} xlinkHref={xlinkHref}/>
  );
}
