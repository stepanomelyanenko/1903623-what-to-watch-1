import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type FilmCardProps = {
  title: string,
  image: string,
  id: number,
  onMouseOver: (evt: MouseEvent<HTMLDivElement>) => void;
}


function FilmCard({title, image, id, onMouseOver}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={onMouseOver}>
      <div className="small-film-card__image">
        <img src={image} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Film}/${id}`}>{title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
