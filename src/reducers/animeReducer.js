const initialState = {
    anime: {}
}
const animeReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_ANIME_DETAILS': {
            return {
                ...state,
                anime: action.anime
            }
        }
            
        default: return state;
    }
}
export default animeReducer;