import React, { useEffect, useState } from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';

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
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <AnimeCard anime={anime} showDetails={true}/>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <h1>{anime.name}</h1>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="row">
                                    <p className="anime-text">{anime.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <h3>Anime Fans Reviews</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return null;
};
export default AnimePage;