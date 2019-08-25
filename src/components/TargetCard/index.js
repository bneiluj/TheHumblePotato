import React from 'react';
import './TargetCard.css';
import headshot from './headshot.jpg';

function TargetCard(props) {
  return (
    <div className="card">
      <img src={headshot} className="card-img-top" />
      <div className="card-body">


        <h5 className="card-title">{props.target.name}</h5>
        <p className="card-text">{props.target.followers} Followers</p>
        <p className="card-text">Relief Donation: ${props.target.pot}</p>
        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
	    </div>
    </div>
  );
}

export default TargetCard;