import { configureStore } from "@reduxjs/toolkit";

import connectionSlice from "./connectionSlice";
import formSlice from "./formSlice";
import messageSlice from "./messageSlice";

const store = configureStore({
  reducer: {
    connection: connectionSlice.reducer,
    messageLayer: messageSlice.reducer,
    formLayer: formSlice.reducer,
  },
});

export default store;
