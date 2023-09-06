import TVShowListItem from "../TvShowListItem/TVShowListItem";

import s from './style.module.css'

const TVShowList = ({ TVShowList,onClick }) => {
  return (
    <div>
      <div className={s.title}>You will probably like :</div>
      <div className={s.tvShowList__list}>
        {TVShowList.map((tvShow) => {
          return (
            <span className={s.tvShowList__item} key={tvShow.id}>
              <TVShowListItem tvShow={tvShow} onClick={onClick} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TVShowList;