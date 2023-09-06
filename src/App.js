import React, { useEffect, useState } from 'react';

import SearchBar from './component/SearchBar/SearchBar';
import TVShowList from './component/TVShowList/TVShowList';
import LogoImg from './assets/images/logo.jpg';
import Logo from './component/Logo/Logo';
import TVShowDetail from './component/TVShowDetail/TVShowDetail';
import { BACKDROP_BASE_URL, RANDOM_NUM } from './api/config';
import { TVShowAPI } from './api/tv-show-api';
import s from './style.module.css';

const App = () => {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [tvShowList, setTVShowList] = useState();
  const [key, setKey] = useState('');

  useEffect(() => {
    fetchPopulars(key);
  }, [key]);

  async function fetchPopulars(key) {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopulars(key);
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[RANDOM_NUM]);
        setTVShowList(popularTVShowList);
      }
    } catch (err) {
      alert('Something went wrong');
    }
  }
  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
        setTVShowList(searchResponse);
      }
    } catch (err) {
      alert('Something went wrong');
    }
  }
  const clickHandler = (tvShow) => {
    setCurrentTVShow(tvShow);
  };
  function logoClick() {
    setKey((prevkey) => {
      if (prevkey === 'TV Show') {
        setKey('Movie');
      } else setKey('TV Show');
    });
  }
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center /cover`
          : 'black',
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>
              <Logo
                onClick={logoClick}
                img={LogoImg}
                title={`What-To-Watch ${key}`}
                subtitle="Find a show you may like"
              />
            </div>
            {currentTVShow && <div className={s.TMDB}>{`TMDB ID: ${currentTVShow.id}`}</div>}
          </div>
          <div className="col-md-8 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} searchItem={key} />
            {/* <input style={{ width: '100%' }} type="text" /> */}
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <>
            <TVShowList TVShowList={tvShowList} onClick={clickHandler} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
