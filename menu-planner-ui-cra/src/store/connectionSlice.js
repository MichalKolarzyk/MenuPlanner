import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: {
    token: localStorage.token,
    authorizationMethod: localStorage.authMethod,
    baseUrl: "http://localhost:5000",
    isBusy: false,
    isLoggedIn: !!localStorage.token
  },
  reducers: {
    test(state) {
      alert(state.token);
    },
    setToken(state, action) {
      const newToken = action.payload;
      state.token = newToken;
      localStorage.token = newToken;
      if(!!newToken){
        state.isLoggedIn = true;
      } else{
        state.isLoggedIn = false;
      }

    },
    setAuthorizationMethod(state, action){
        const newAuthorizationMethod = action.payload;
        state.authorizationMethod = newAuthorizationMethod;
        localStorage.authorizationMethod = newAuthorizationMethod;
    },
    setIsBusy(state, action){
        const newIsBusy = action.payload
        state.isBusy = newIsBusy;
    },
  },
});

export const connectionActions = connectionSlice.actions;

export default connectionSlice;
