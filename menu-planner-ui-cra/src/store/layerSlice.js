import { createSlice } from "@reduxjs/toolkit";

const layerSlice = createSlice({
  name: "connection",
  initialState: {
    isVisibleFormLayer: false,
    isVisibleMessageLayer: false,
  },
  reducers: {
    showMessage(state, action) {
      alert("Hello layer");
    },
  },
});

export const layerActions = layerSlice.actions;

export default layerSlice;
