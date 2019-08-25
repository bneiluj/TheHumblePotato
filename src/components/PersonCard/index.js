import React from 'react';
import './PersonCard.css';

function PersonCard(props) {
  return (
    <div className="card">
      <img src={props.person.picture} className="card-img-top" alt="" />
      <div className="card-body">
        {props.person.followers && <p className="card-text"><h6>{props.person.followers} Followers</h6></p>}
        {props.person.pot && <p className="card-text"><h6>Relief Donation: ${props.person.pot}</h6></p>}

        {props.person.description && <p className="card-text"><h6>Description: {props.person.description}</h6></p>}
        {props.person.location && <p className="card-text"><h6>Location: {props.person.location}</h6></p>}
        {props.person.twitter && <p className="card-text"><h6>Twitter Verified: <span role="img" aria-label="">✅</span></h6></p>}
        {props.person.email && <p className="card-text"><h6>Email Verified: <span role="img" aria-label="">✅</span></h6></p>}
        {props.person.github && <p className="card-text"><h6>GitHub Verified: <span role="img" aria-label="">✅</span></h6></p>}
        {props.person.eth && <p className="card-text"><h6>Eth Verified: <span role="img" aria-label="">✅</span></h6></p>}

        {props.person.name && <button className="btn btn-secondary btn-xsm" disabled><h6>{props.person.name}</h6></button>}
	    </div>
    </div>
  );
}

export default PersonCard;
