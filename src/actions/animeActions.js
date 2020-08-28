// export function getAnimeDetails(id) {
//     console.log("hello")
//     return (dispatch)=> {
//          fetch(`http://localhost:8080/services/anime?id=${id}`)
//         .then((res) => res.json())
//         .then((response) => {
//             if(response && response.data){ 
//                 dispatch({type: 'SET_ANIME', anime: response.data})    
//             }
//         })
//         .catch((err) => console.log("err", err));
//     }
// }