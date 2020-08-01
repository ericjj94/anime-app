import React from "react";
import { withRouter } from 'react-router-dom';

const AnimeCard = (props) => {
  const { anime }= props;

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
      console.log('anime',_id);
      props.history.push(`/anime/${_id}`)

    }

  return (
    <div className="col-md-4" style={{margin: '5px 0px'}}>
      <div className="card" style={{width: '100%', height: 'auto' }} onClick={()=>{handleClick(anime)}}>
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
export default withRouter(AnimeCard);
