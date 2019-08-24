import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { DrizzleProvider } from 'drizzle-react';
import { ReactReduxContext } from "react-redux";
import CheckForWeb3Provider from './containers/CheckForWeb3Provider';
import configureStore, { history } from "./store";

export const store = configureStore();

// Import contracts
// import SimpleStorage from './../build/contracts/SimpleStorage.json';

const options = {
  contracts: [
    // SimpleStorage,
  ]
};

const RootComponent = () => (
  <>
    {ReactReduxContext && <DrizzleProvider store={store} options={options} context={ReactReduxContext}>
      <CheckForWeb3Provider>
        <App context={ReactReduxContext} {...(history ? { history } : { })} />
      </CheckForWeb3Provider>
    </DrizzleProvider>}
    {!ReactReduxContext && <div>Loading...</div>}
  </>
);

const rootElement = document.getElementById("root");
render(<RootComponent />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
