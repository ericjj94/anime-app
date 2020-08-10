import React, { useEffect, useState } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";

const AnimeList = () => {
  const [state, setState ] = useState({ animeList: [], currentPage: 1 });
  const { animeList,currentPage } = state;

  useEffect(() => {
    if(animeList && !animeList.length){
      const getAnimeList = () => {
        fetch(`http://localhost:8080/services/animes?currentPage=${currentPage}`)
          .then((res) => res.json())
          .then((response) => {
            if(response && response.data){ 
              console.log("getAnimeList -> response.data", response.data)
              setState({ ...state, animeList: response.data });
            }
          })
          .catch((err) => console.log("err", err));
      }
      getAnimeList();
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
export default AnimeList;

