import React from 'react';
import { drizzleConnect } from 'drizzle-react';

class CheckForWeb3Provider extends React.Component {
  render() {
    const { initialized, children } = this.props;

    if (!initialized) {
      return <div>Loading...</div>;
    }

    return <>{children}</>;
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.drizzleStatus.initialized
  }
}

export default drizzleConnect(CheckForWeb3Provider, mapStateToProps);
