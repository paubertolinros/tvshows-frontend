import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({showData}) {
  return (
      <div>
        <img src={showData.image} alt={showData.title} className="show_img"/>
      <Link to={`/shows/${showData._id}`}><h2>{showData.title}</h2></Link>
        <p>Creator: {showData.creator}</p>
        <p>Genre: {showData.genre}</p>
        <p>Launched: {showData.launched}</p>
      </div>
  )
}
