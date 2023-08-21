import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=2f660208560d4c44c0f7cea74b24397c';
const API_KEY = 'f660208560d4c44c0f7cea74b24397c';

axios.defaults.baseURL = BASE_URL;
export const getTrendingMovies = async () => {
  const res = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieById = async id => {
  const res = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieCast = async id => {
  const res = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieReviews = async id => {
  const res = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieByName = async name => {
  const res = await axios.get(`/search/movie?api_key=${API_KEY}&query=${name}`);
  return res.data;
};