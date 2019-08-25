import { connectRouter } from "connected-react-router";
import twitterReducer from "./twitter";
import threeBoxReducer from "./3box";

export default history => ({
  twitter: twitterReducer,
  threeBox: threeBoxReducer,
  ...(
    history
    && { router: connectRouter(history) }
  )
});
