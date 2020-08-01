import React, { useEffect, useState } from 'react';

const AnimePage = (props) => {
    const [state,setState] = useState({anime: {} })
    const { anime }= state;

    function getAnimeDetails() {
        const id = props.match.params.id;
        fetch(`http://localhost:8080/services/anime?id=${id}`,{ method: 'GET' })
        .then(res=> res.json())
        .then(response=> {
            setState({...state, anime: response && response.data})
        });
    }

    useEffect(()=> {
        if(anime && !Object.keys(anime).length) {
            getAnimeDetails();
        }
    },[])

    if(anime && Object.keys(anime).length) {
        return (
            <div>AnimePage</div>
        )
    }
    return null;
};
export default AnimePage;