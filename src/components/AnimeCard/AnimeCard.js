import React from "react";

const AnimeCard = ({ anime }) => {

  if(!anime || (anime && !anime.length)) {
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

  return (
    <div className="col-12 col-md-12 col-lg-4" style={{margin: '5px 0px'}}>
      <div className="card" style={{height: '590px'}}>
        <img className="card-img-top" src={anime.img} style={{height: '300px'}} />
        <div className="card-body">
          <h4 className="card-title">{anime.name}</h4>
          {/* TODO: format the string in backend */}
          <p>
              {formatDescription(anime.description)}
            {anime.description.length > 150
              ? `${anime.description.slice(0, 150)}...`
              : anime.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default AnimeCard;
