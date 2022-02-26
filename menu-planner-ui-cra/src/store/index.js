import { configureStore } from "@reduxjs/toolkit";

import connectionSlice from "./connectionSlice";

const store = configureStore({
  reducer: { connection: connectionSlice.reducer},
});

export default store;
