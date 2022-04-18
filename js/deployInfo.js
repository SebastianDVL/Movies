export function showMovies(movies,contenedor){

    const popularMovieTemplate = document.querySelector('[data-populares]')

    movies.results.forEach((result,index) => {
        let container = popularMovieTemplate.content.cloneNode(true).children[0]
        let source  = result.poster_path == null ? result.backdrop_path : result.poster_path
        container.querySelector('.group').classList.add(`bg-[url('https://image.tmdb.org/t/p/w500${source}')]`) 
        container.querySelector('p').textContent = result.title
        container.querySelector('h5').textContent = result.release_date.substring(0, 4)
        container.querySelector('button').id = result.id
        let size = result.vote_average.toFixed(1).replace('.',"")
        container.querySelector('h6').textContent = size + "%"
        container.querySelector('input').style.backgroundSize = `${size}% 100%`
        if(index % 2 == 0){
            container.classList.add('snap-start')
        }

        contenedor.appendChild(container)
    })
}

