import { connectRouter } from "connected-react-router";
import twitterReducer from "./twitter";

export default history => ({
  twitter: twitterReducer,
  ...(
    history
    && { router: connectRouter(history) }
  )
});
