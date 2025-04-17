import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterActions";
import toolkitReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,         // cho Redux thường
    toolkitCount: toolkitReducer,  // cho Redux Toolkit
  },
});
export default store;
