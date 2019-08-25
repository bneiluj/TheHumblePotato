import React from 'react';
import './TargetCard.css';
import headshot from './headshot.jpg';

function TargetCard(props) {
  return (
    <div className="TargetCard col-md-4 col-md-offset-4">
      <img src={headshot} />
      <p>{props.target.followers} Followers</p>
      <p>Relief Donation: ${props.target.pot}</p>
      <h3>{props.target.name}</h3>
    </div>
  );
}

export default TargetCard;