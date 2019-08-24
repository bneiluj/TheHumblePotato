import { connectRouter } from "connected-react-router";
import exampleReducer from "./example";

export default history => ({
  example: exampleReducer,
  ...(
    history
    && { router: connectRouter(history) }
  )
});
