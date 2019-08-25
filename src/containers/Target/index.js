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
        <div>
          <TargetCard target={target} />
        </div>
      </div>
    );
  }
}

export default Target;
