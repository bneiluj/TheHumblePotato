import React from 'react';
import './Target.css';
import TargetCard from '../../components/TargetCard';

class Target extends React.Component {
  render() {
  	let target = {
				'name': 'Emin Gün Sirer',
				'followers': '75,823',
				'pot': '5,495',
				'number': '18'
			}

    return (
      <div className="Target">
        <div className="row Target-card">
          <TargetCard target={target} />
        </div>
        <div className="row" width="100%">
        	<button className="mr-sm-3 mr-2 btn btn-secondary btn-sm">Participate</button>
    			<button className="mr-sm-3 mr-2 btn btn-secondary btn-sm">Donate</button>
        </div>
      </div>
    );
  }
}

export default Target;
