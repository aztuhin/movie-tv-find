import { SMALL_IMG_COVER_BASE_URL } from '../../api/config';
import s from './style.module.css';
const MAX_TITLE_CHAR = 20;

const TVShowListItem = ({tvShow,onClick}) => {
  const onClick_ = () => {
    onClick(tvShow);
  };
  let tvORmoveShow = (tvShow.name === undefined) ? tvShow.title : tvShow.name;

  return (
    <div onClick={onClick_} className={s.container}>
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.image}
      />
      <div className={s.title}>
        {tvORmoveShow.length > MAX_TITLE_CHAR
          ? tvORmoveShow.slice(0, MAX_TITLE_CHAR) + '...'
          : tvORmoveShow}
      </div>
    </div>
  );
};
export default TVShowListItem;
