export function showMovies(movies,contenedor){

    const popularMovieTemplate = document.querySelector('[data-populares]')

    movies.results.forEach((result,index) => {
        let container = popularMovieTemplate.content.cloneNode(true).children[0]
        container.querySelector('img').src = `https://image.tmdb.org/t/p/w500${result.poster_path}`
        container.querySelector('p').textContent = result.title
        container.querySelector('h5').textContent = result.release_date.substring(0, 4)
        let size = result.vote_average.toFixed(1).replace('.',"")
        container.querySelector('h6').textContent = size + "%"
        container.querySelector('input').style.backgroundSize = `${size}% 100%`
        if(index % 2 == 0){
            container.classList.add('snap-start')
        }

        contenedor.appendChild(container)
    })
}


export function showUpcomingMovies(movies){
    const contenedorUpcoming = document.querySelector('#Estrenos')

    movies.results.forEach(result =>{
        let img = document.createElement('img')
        img.src = `https://image.tmdb.org/t/p/w500${result.poster_path}`
        img.classList.add("aspect-square")

        contenedorUpcoming.appendChild(img)
    })
     
}

