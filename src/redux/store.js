import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messages";

export default configureStore({
  reducer: {
    messages: messagesReducer,
  },
});
