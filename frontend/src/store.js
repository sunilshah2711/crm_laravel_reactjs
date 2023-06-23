import { configureStore } from "@reduxjs/toolkit";

// Slices
import counterReducer from "./features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
