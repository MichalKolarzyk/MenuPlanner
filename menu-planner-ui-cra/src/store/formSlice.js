import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formLayer",
  initialState: {
    form: {},
    isVisible: false,
  },
  reducers: {
    show(state, action) {
      state.form = action.payload;
      state.isVisible = true;
    },

    close(state){
      state.form = null;
      state.isVisible = false;
    }
  },
});

export const formActions = formSlice.actions;

export default formSlice;
