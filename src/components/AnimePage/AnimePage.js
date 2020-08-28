import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import AnimeCard from '../AnimeCard/AnimeCard';
import { getAnimeDetails } from '../../actions/animeListActions';

const AnimePage = (props) => {
    const { anime }= props;
    
    useEffect(()=> {
        if(anime && !Object.keys(anime).length) {
            const id = props.match.params.id;
            props.getAnimeDetails(id);
        }
    },[anime])

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
const mapStateToProps = state => ({
    anime: state.animeReducer.anime
})
export default connect(mapStateToProps, { getAnimeDetails })(AnimePage);