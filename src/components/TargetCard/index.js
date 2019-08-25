import React from 'react';
import './TargetCard.css';
import headshot from './headshot.jpg';

function TargetCard(props) {
  return (
    <div className="card">
      <img src={headshot} className="card-img-top" />
      <div className="card-body">
        <p className="card-text"><h6>{props.target.followers} Followers</h6></p>
        <p className="card-text"><h6>Relief Donation: ${props.target.pot}</h6></p>
        <button className="btn btn-secondary btn-xsm" disabled><h6>{props.target.name}</h6></button>
	    </div>
    </div>
  );
}

export default TargetCard;
