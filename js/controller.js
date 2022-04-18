import {useAPI,APIKEY} from './consumirAPI.js';
import {showMovies} from './deployInfo.js';
import {goToThisInfoMovie} from './seeMovieInfo.js'; 


//se declaran todas las uris 
let uriPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`
let uriUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`
let uriRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`
let uriPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`

//1
let popularMovies = await useAPI(uriPopulares);
const contenedorPopulares = document.querySelector('#populares')
showMovies(popularMovies,contenedorPopulares)
//2
let upcomingMovies = await useAPI(uriUpcoming);
const contenedorUpcoming = document.querySelector('#proximamente')
showMovies(upcomingMovies,contenedorUpcoming);
//3
let ratedMovies = await useAPI(uriRated)
const contenedorRated = document.querySelector('#rated')
showMovies(ratedMovies,contenedorRated);
//4
let playingMovies = await useAPI(uriPlaying);
const contenedorPlaying = document.querySelector('#cartelera')
showMovies(playingMovies,contenedorPlaying);


goToThisInfoMovie()

console.table(popularMovies.results)




