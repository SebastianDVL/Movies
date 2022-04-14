export const APIKEY = '7682919b86439ef2230fe08030625c66'

export async function useAPI(uri){

    let resp = await fetch(uri)
    let ids = resp.json()
    return ids
}
