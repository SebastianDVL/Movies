import {useAPI,APIKEY} from './consumirAPI.js';
import {showMovies} from './deployInfo.js';
import {showUpcomingMovies} from './deployInfo.js';


//se declaran todas las uris 
let uriPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
let uriUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`
let uriRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`

//1
let popularMovies = await useAPI(uriPopulares);
const contenedorPopulares = document.querySelector('#populares')
showMovies(popularMovies,contenedorPopulares)
//2
let upcomingMovies = await useAPI(uriUpcoming);
showUpcomingMovies(upcomingMovies);
//3
let ratedMovies = await useAPI(uriRated)
const contenedorRated = document.querySelector('#rated')
showMovies(ratedMovies,contenedorRated);
console.log(ratedMovies)