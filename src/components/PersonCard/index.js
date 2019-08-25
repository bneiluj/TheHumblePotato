import React from 'react';
import './PersonCard.css';

function PersonCard(props) {
  return (
    <div className="card">
      <img src={props.person.picture} className="card-img-top" alt="" />
      <div className="card-body">
        {props.person.name && <h5 className="card-title">{props.person.name}</h5>}

        {props.person.followers && <p className="card-text">{props.person.followers} Followers</p>}
        {props.person.pot && <p className="card-text">Relief Donation: ${props.person.pot}</p>}

        {props.person.description && <p className="card-text">Description: {props.person.description}</p>}
        {props.person.location && <p className="card-text">Location: {props.person.location}</p>}
        {props.person.twitter && <p className="card-text">Twitter Verified: <span role="img" aria-label="">✅</span></p>}
        {props.person.email && <p className="card-text">Email Verified: <span role="img" aria-label="">✅</span></p>}
        {props.person.github && <p className="card-text">GitHub Verified: <span role="img" aria-label="">✅</span></p>}
        {props.person.eth && <p className="card-text">Eth Verified: <span role="img" aria-label="">✅</span></p>}

        {/*<a href="#" className="btn btn-primary">Go somewhere</a>*/}
	    </div>
    </div>
  );
}

export default PersonCard;
