import React from 'react';
import './Target.css';
import PersonCard from '../../components/PersonCard';
import headshot from './headshot.jpg';

class Target extends React.Component {
  render() {
  	let person = {
			'name': 'Emin Gün Sirer',
			'followers': '75,823',
			'pot': '5,495',
			'number': '18',
      'picture': headshot
		};

    return (
      <div className="Target">
        <div className="row Target-card">
          <PersonCard person={person} />
        </div>
        <div className="row" width="100%">
        	<button className="mr-sm-3 mr-2 btn btn-secondary btn-lg">Participate</button>
    			<button className="mr-sm-3 mr-2 btn btn-secondary btn-lg">Donate</button>
        </div>
      </div>
    );
  }
}

export default Target;
