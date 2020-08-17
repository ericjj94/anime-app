const initialState = {
    animeList: []
}
const searchReducer = (state= initialState,action) => {
    switch (action.type) {
        case 'SET_ANIME_LIST': {
            return {
                ...state,
                animeList: action.animeList
            }
        }
            
        default: return state;
    }

}
export default searchReducer;