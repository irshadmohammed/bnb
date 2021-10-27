import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'

function SearchResult({ img, location, title, description, star, price, total }) {
  return (
    <div className="searchResults">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResults__heart" />
      <div className="searchResults__info">
        <div className="searchResults__infoTop">
          <p>{location}</p>
          <p>{title}</p>
          <p>_____</p>
          <p>{description}</p>
        </div>
        <div className="searchResults__infoBottom">
          <div className="searchResults__stars">
            <StarIcon
              className="searchResults__star"
            />
            <p>{star}</p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <h2>{total}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
