import FetchService from '../apiService/FetchService';

export function getAnimeList(currentPage) {
    return async dispatch => {
        const response = await FetchService.get(`http://localhost:8080/services/animes?currentPage=${currentPage}`)
        if(response && response.data){ 
            dispatch({type: 'SET_ANIME_LIST', animeList: response.data})    
        }
    } 
}

export function getAnimeDetails(id) {
    return async dispatch => {
        const response = await FetchService.get(`http://localhost:8080/services/anime?id=${id}`);
        if(response && response.data) {
            dispatch({type: 'SET_ANIME_DETAILS', anime: response.data})    
        }
    }
}