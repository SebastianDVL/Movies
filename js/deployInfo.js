export function showPopularMovies(movies){

    const popularMovieTemplate = document.querySelector('[data-populares]')
    const contenedorPopulares = document.querySelector('#populares')
    movies.results.forEach((result,index) => {
        let container = popularMovieTemplate.content.cloneNode(true).children[0]
        container.querySelector('img').src = `https://image.tmdb.org/t/p/w500${result.poster_path}`
        container.querySelector('p').textContent = result.original_title
        container.querySelector('h5').textContent = result.release_date
        if(index % 2 == 0){
            container.classList.add('snap-start')
        }
        contenedorPopulares.appendChild(container)
    })
}