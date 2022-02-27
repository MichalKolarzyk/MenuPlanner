import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messageLayer",
  initialState: {
    title: "",
    message: "",
    isVisible: false,
  },
  reducers: {
    show(state, action) {
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.isVisible = true;
    },

    close(state){
      state.title = "";
      state.message = "";
      state.isVisible = false;
    }
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice;
