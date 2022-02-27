import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "formLayer",
  initialState: {
    form: {},
    title: "",
    isVisible: false,
  },
  reducers: {
    show(state, action) {
      state.form = action.payload.form;
      state.title = action.payload.title
      state.isVisible = true;
    },

    close(state){
      state.form = null;
      state.title = null;
      state.isVisible = false;
    }
  },
});

export const formActions = formSlice.actions;

export default formSlice;
