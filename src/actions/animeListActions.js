export function getAnimeList(currentPage) {
    return (dispatch)=> {
         fetch(`http://localhost:8080/services/animes?currentPage=${currentPage}`)
        .then((res) => res.json())
        .then((response) => {
            if(response && response.data){ 
                dispatch({type: 'SET_ANIME_LIST', animeList: response.data})    
            }
        })
        .catch((err) => console.log("err", err));
    }
}