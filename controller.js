const APIKEY = '7682919b86439ef2230fe08030625c66'

async function useAPI(){
    let resp = await fetch(`https://api.themoviedb.org/3/movie/changes?api_key=${APIKEY}&page=1`)
    let ids = resp.json()
    return ids
}

let ids = await useAPI();

console.log(ids)