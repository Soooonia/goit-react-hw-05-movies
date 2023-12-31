import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';

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