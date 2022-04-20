import {useAPI,APIKEY} from './consumirAPI.js'

async function printInfo(){
    let uriMovie = `https://api.themoviedb.org/3/movie/${window.location.search.substring(4)}?api_key=${APIKEY}&language=en-US`
    let uriMovieCredits= `https://api.themoviedb.org/3/movie/${window.location.search.substring(4)}/credits?api_key=${APIKEY}&language=en-US`
    let info = await useAPI(uriMovie)
    let movieCredits = await useAPI(uriMovieCredits)
    console.log(info)
    console.log(movieCredits)
    let inf =  document.querySelector('#info')
    inf.classList.add(`bg-[url('https://image.tmdb.org/t/p/original${info.backdrop_path}')]`)
    document.querySelector('#poster').classList.add(`bg-[url('https://image.tmdb.org/t/p/original${info.poster_path}')]`)

    const colorThief = new ColorThief()
    let img = new Image()
    img.addEventListener('load', function() {
        let color = colorThief.getColor(img);
        document.querySelector('#info div').style.background = `rgb(${color[0]},${color[1]},${color[2]},0.9)`
        document.querySelector('#poster div').classList.add(`group-hover:bg-[rgb(${color[0]},${color[1]},${color[2]},0.4)]`)
    })
      
    img.crossOrigin = 'Anonymous';
    img.src  =`https://image.tmdb.org/t/p/original${info.backdrop_path}`

    inf.querySelector('h1').textContent = info.original_title
    inf.querySelector('h2').textContent = info.tagline
    inf.querySelector('p').textContent = info.overview 
    inf.querySelector('h3').textContent = info.release_date
    inf.querySelector('#genres').textContent = info.genres.map(genre =>genre.name ).join(' - ')
    let size = info.vote_average.toFixed(1).replace('.',"")
    inf.querySelector('h4').textContent = size + "%"
    inf.querySelector('input').style.backgroundSize = `${size}% 100%`

    movieCredits.crew.forEach(member=>{
       
        let cont = document.createElement('div')
        cont.classList.add('pr-5')

        let depart = document.createElement('h1')
        depart.classList.add('font-semibold','mb-2')
        depart.textContent = member.known_for_department

        let hr = document.createElement('hr')

        let name = document.createElement('h2')
        name.textContent = `${member.name} (${member.job})`

        cont.appendChild(depart)
        cont.appendChild(hr)
        cont.appendChild(name)
        inf.querySelector('#crew').appendChild(cont)
    })
    const castContainer = document.querySelector('#cast')
    movieCredits.cast.forEach(actor =>{
        let actorContainer = document.querySelector('[data-cast]').content.cloneNode(true).children[0]
        if(actor.profile_path){
            actorContainer.querySelector('.h-80').classList.add(`bg-[url('https://image.tmdb.org/t/p/original${actor.profile_path}')]`)
        }else{
             actorContainer.querySelector('.h-80').classList.add(`bg-[url('https://intratex.com/public/images/NoImagePlaceholder.png')]`)  
        }
     
        actorContainer.querySelector('p').textContent = actor.name
        actorContainer.querySelector('h5').textContent = actor.character

        castContainer.appendChild(actorContainer)
    })
}

printInfo();