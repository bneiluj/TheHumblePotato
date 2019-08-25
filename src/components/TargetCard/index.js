import React from 'react';
import './TargetCard.css';
import headshot from './headshot.jpg';

function TargetCard(props) {
  return (
    <div className="card">
      <img src={headshot} className="card-img-top" />
      <div className="card-body">
	      <p className="card-text">{props.target.followers} Followers</p>
	      <p className="card-text">Relief Donation: ${props.target.pot}</p>
	      <h2 className="card-title">{props.target.name}</h2>
	    </div>
    </div>
  );
}

export default TargetCard;