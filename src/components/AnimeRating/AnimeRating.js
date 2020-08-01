import React from 'react';

// add star rating to the component
const AnimeRating = ({rating}) => {
    if(!rating) {
        return null;
    }
    return (<div>{rating}</div>);
}
export default AnimeRating;