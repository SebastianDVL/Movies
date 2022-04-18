import {useAPI,APIKEY} from './consumirAPI.js'



async function printInfo(){
    let uriMovie = `https://api.themoviedb.org/3/movie/${window.location.search.substring(4)}?api_key=${APIKEY}&language=en-US`
    
    let info = await useAPI(uriMovie)
    console.log(info)

    let inf =  document.querySelector('#info')
    inf.classList.add(`bg-[url('https://image.tmdb.org/t/p/original${info.backdrop_path}')]`)
    document.querySelector('#poster').classList.add(`bg-[url('https://image.tmdb.org/t/p/original${info.poster_path}')]`)
    inf.querySelector('h1').textContent = info.original_title
    inf.querySelector('h2').textContent = info.tagline
    inf.querySelector('p').textContent = info.overview 
}

printInfo();