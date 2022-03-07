import { createSlice } from "@reduxjs/toolkit";
import LocalStorageWrapper from "../../extensions/LocalStorageExt";

const userSlice = createSlice({
  name: "connection",
  initialState: {
    user: LocalStorageWrapper.getObject("currentUser")
  },
  reducers: {
    setUser(state, action) {
      const newUser = action.payload;
      state.user = newUser;
      LocalStorageWrapper.setObject("currentUser", newUser)
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;