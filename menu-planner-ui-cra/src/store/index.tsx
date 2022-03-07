import { configureStore } from "@reduxjs/toolkit";

import connectionSlice from "./connection/connectionSlice";
import formSlice from "./formLayer/formSlice";
import messageSlice from "./messageLayer/messageSlice"; 
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    connection: connectionSlice.reducer,
    messageLayer: messageSlice.reducer,
    formLayer: formSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
