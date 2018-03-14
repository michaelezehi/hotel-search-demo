import React from 'react';
import './SearchResult.css';
import ReactStars from 'react-stars';

const SearchResult = ({ hotels }) => {
  const hotelItems = hotels.map((hotel, index) => (
    <li className="Search-item" key={index}>
      <a className="Search-title" href="/">
        {hotel.Name}
      </a>
      <ReactStars
        count={5}
        value={hotel.StarRating}
        size={24}
        color2={'#ffd700'}
      />

      {hotel.Facilities.map((facility, facilityIndex) => {
        return (
          <span className="badge badge-secondary" key={facilityIndex}>
            {facility}
          </span>
        );
      })}
    </li>
  ));

  return <ul>{hotelItems}</ul>;
};

export default SearchResult;
