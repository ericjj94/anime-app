import React, { useEffect, useState, useSelector } from "react";
import { connect } from 'react-redux';
import AnimeCard from "../AnimeCard/AnimeCard";
import { getAnimeList } from '../../actions/animeListActions';

const AnimeList = ({animeList, getAnimeList}) => {
  const [state, setState ] = useState({ currentPage: 1 });
  const { currentPage } = state;
  
  useEffect(() => {
    if(animeList && !animeList.length) {
      getAnimeList()
    }
  }, [animeList]);

  if (animeList && animeList.length) {
    return (
      <div className="container">
        <div className="row">
          {animeList.map((anime) => {
            return <AnimeCard key={anime._id} anime={anime}/>;
          })}
        </div>
      </div>
    );
  }
  return null;
};
const mapStateToProps = state => ({
  animeList: state.searchReducer.animeList
})
export default connect(mapStateToProps,{getAnimeList})(AnimeList);

