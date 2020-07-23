import React, { useEffect, useState } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";

const AnimeList = () => {
  const [state, setState ] = useState({ animeList: [], currentPage: 1 });
  const { animeList,currentPage } = state;

  function getAnimeList() {
    fetch(`http://localhost:8080/services/getAnimes?currentPage=${currentPage}`)
      .then((res) => res.json())
      .then((response) => {
        setState({ ...state, animeList: response && response.data });
      })
      .catch((err) => console.log("err", err));
  }
  

  useEffect(() => {
    getAnimeList();
  }, []);

  // useEffect(()=>{
  //   getAnimeList();
  // },[currentPage])

  if (animeList && animeList.length) {
    return (
      <div className="container">
        <div className="row">
          <div className="cards">
          {animeList.map((anime) => {
            return <AnimeCard key={anime.id} anime={anime}/>;
          })}
          </div>
        </div>
      </div>
    );
  }
  return null;
};
export default AnimeList;

