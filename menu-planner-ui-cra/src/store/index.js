import { configureStore } from "@reduxjs/toolkit";

import connectionSlice from "./connection/connectionSlice";
import formSlice from "./formLayer/formSlice";
import messageSlice from "./messageLayer/messageSlice"; 

const store = configureStore({
  reducer: {
    connection: connectionSlice.reducer,
    messageLayer: messageSlice.reducer,
    formLayer: formSlice.reducer,
  },
});

export default store;
