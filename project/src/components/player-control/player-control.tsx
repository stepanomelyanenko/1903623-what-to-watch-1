type PlayerControlProps = {
  width: number;
  height: number;
  xlinkHref: string;
  desc: string;
  className: string;
  onClick?: () => void;
}

export default function PlayerControl({width, className, desc, height, xlinkHref, onClick}:PlayerControlProps): JSX.Element {
  return(
    <button onClick={onClick} type="button" className={className}>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <use xlinkHref={xlinkHref}></use>
      </svg>
      <span>{desc}</span>
    </button>
  );
}
