const web_url = "https://developer.themoviedb.org/reference/discover-tv"
const search_query__web_url = "https://developer.themoviedb.org/docs/search-and-query-for-details"

const BASE_URL = 'https://api.themoviedb.org/3/'
const URL_end ='include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
const SEARCH_URL_END_PART = '&include_adult=false&language=en-US&page=1';
const url = 'https://api.themoviedb.org/3/search/multi?query=love%20island&include_adult=false&language=en-US&page=1';
const url_tvFIND    = 'https://api.themoviedb.org/3/search/tv?query=Love%20Island&include_adult=false&language=en-US&page=1';
const url_movieFIND = 'https://api.themoviedb.org/3/search/movie?query=inception&include_adult=false&language=en-US&page=1';
const URL_TV_LIST_ID = 'https://api.themoviedb.org/3/genre/tv/list?language=en';
const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/original';
const SMALL_IMG_COVER_BASE_URL = 'https://image.tmdb.org/t/p/w300';
const RANDOM_NUM = Math.floor(Math.random() * 19);

export {
  BASE_URL,
  URL_end,
  BACKDROP_BASE_URL,
  RANDOM_NUM,
  SMALL_IMG_COVER_BASE_URL,
  SEARCH_URL_END_PART,
};