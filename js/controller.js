import {useAPI,APIKEY} from './consumirAPI.js';
import {showPopularMovies} from './deployInfo.js';


let uriPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
let popularMovies = await useAPI(uriPopulares);
showPopularMovies(popularMovies)

console.log(popularMovies)