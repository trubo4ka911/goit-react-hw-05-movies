const API_KEY = "d94e772b2027bf78267ef28130c02d62";
const BASE_URL = "https://api.themoviedb.org/3";

async function Api(url = "") {
  const response = await fetch(url);
  return response.ok ? await response.json() : Promise.reject(new Error("NOT"));
}
export function getTrending() {
  return Api(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}
export function getIdMovies(moviesId) {
  return Api(`${BASE_URL}/movie/${moviesId}?api_key=${API_KEY}`);
}
export function getCast(moviesId) {
  return Api(`${BASE_URL}/movie/${moviesId}/credits?api_key=${API_KEY}`);
}
export function getReview(moviesId) {
  return Api(`${BASE_URL}/movie/${moviesId}/reviews?api_key=${API_KEY}&page=1`);
}
export function getSearch(query) {
  return Api(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
}
