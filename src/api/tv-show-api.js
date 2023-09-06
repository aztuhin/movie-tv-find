import fetch from 'node-fetch';
import axios from 'axios';
import { BASE_URL,URL_end, } from './config';


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmU2MzZkMWIzY2I5YjhjMDRhYjAyN2U5ODJlZWQ2OCIsInN1YiI6IjY0ZjRlNzQyN2Q0MWFhMDBmZTllM2MyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d44e3cyixai4dDk2uRFJ6EZTyyijNGE7aeBopYObevc',
  },
};

// export class TVShowAPI {
//   static async fetchPopulars() {
//     // perform request
//     const json = await axios.get(url, options);
//     console.log(json.results);
//     return json.results;
//   }
// };


export class TVShowAPI {
  static async fetchPopulars(key) {
   let tvMovie = 'tv'
    if (key === 'Movie') {
      tvMovie = 'movie';
    }else tvMovie = 'tv'
    try {
      const res = await fetch(
        `${BASE_URL}discover/${tvMovie}?${URL_end}`,
        options
      );
      const json = await res.json();
      return json.results;
    } catch (err) {
      console.error('error:' + err);
    }
  }
  static async fetchByTitle(title) {
    try {
      const res = await fetch(
        `${BASE_URL}search/tv?query=${title}`,
        options
      );
      const json = await res.json();
      return json.results;
    } catch (err) {
      console.error('error:' + err);
    }
  }
};