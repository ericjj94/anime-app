import React from "react";
import { withRouter } from 'react-router-dom';
import AnimeRating from '../AnimeRating/AnimeRating';

const AnimeCard = (props) => {
  const { anime, showDetails }= props;

  if(!anime) {
    return null;
  }
    function formatDescription(description){
        if(!description) {
            return 'no description available'
        }
        else if(description.length >150) {
            return `${description.slice(0,150)}...`
        } 
        return description
    }

    function handleClick({_id}) {
      props.history.push(`/anime/${_id}`)
    }

  return (
    <div className={showDetails ? 'col-md-12': 'col-md-4'} style={{margin: '5px 0px'}}>
      <div className="card" style={{width: '100%', height: 'auto' }} onClick={()=>{handleClick(anime)}}>
        <img className="card-img-top" src={anime.img} style={{height: '300px'}} alt="anime-list-thumbs"/>
        <div className="card-body">
          <h4 className="card-title">{anime.name}</h4>
          {/* TODO: format the string in backend */}
          {!showDetails ? <p>
              {/* {formatDescription(anime.description)} */}
            {anime.description.length > 150
              ? `${anime.description.slice(0, 150)}...`
              : anime.description}
          </p>: <AnimeRating rating={anime.rating}/>}
        </div>
      </div>
    </div>
  );
};
export default withRouter(AnimeCard);
