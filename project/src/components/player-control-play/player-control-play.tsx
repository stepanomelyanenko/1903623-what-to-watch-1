import { playerControl } from '../../const';
import PlayerControl from '../player-control/player-control';

type PlayerControlPlayProps = {
  onClick?: () => void;
}

export default function PlayerControlPlay({onClick}: PlayerControlPlayProps):JSX.Element {
  const {className, desc, height, width, xlinkHref} = playerControl.Play;

  return(
    <PlayerControl onClick={onClick} className={className} desc={desc} height={height} width={width} xlinkHref={xlinkHref}/>
  );
}
