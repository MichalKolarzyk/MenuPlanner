import { configureStore } from "@reduxjs/toolkit";

import connectionSlice from "./connectionSlice";
import layerSlice from "./layerSlice";

const store = configureStore({
  reducer: { connection: connectionSlice.reducer, layer: layerSlice.reducer},
});

export default store;
