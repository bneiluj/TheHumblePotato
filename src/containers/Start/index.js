import React from 'react';
import potato from './potato.png';
import ReactLoading from 'react-loading';
import './Start.css';

class Start extends React.Component {
  componentDidMount() {
    const location = {
      pathname: '/target'
    };
    setTimeout(() => {
      this.props.history.push(location);
    }, 3000);
  }
  render() {
    return (
      <div className="Start">
        <div>
          <header className="Start-header">
            <img src={potato} className="Start-potato" alt="potato" />
          </header>
          <p className="Start-loader">
            <ReactLoading type={"spin"} color={"#FFFFFF"} height={50} width={50} />
          </p>
          <p>Loading...</p>
        </div>
      </div>
    );
  }
}

export default Start;
