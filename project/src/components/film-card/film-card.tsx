import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';

type FilmCardProps = {
  title: string,
  image: string,
  id: number,
  mouseOverHandler: (evt: MouseEvent<HTMLDivElement>) => void;
}


function FilmCard({title, image, id, mouseOverHandler}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={mouseOverHandler}>
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
