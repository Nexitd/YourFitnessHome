import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { ACCESS_TOKEN } from "../../api/api";

export const sendLoginData = createAsyncThunk(
  "auth/sendLoginData",
  async (values) => {
    try {
      const response = await axiosInstance.post("login.php", values);

      return response.data;
    } catch (err) {
      console.error(err);
      throw err.response.data.code;
    }
  }
);

export const sendRegistrationData = createAsyncThunk(
  "auth/sendRegistrationData",
  async (values) => {
    const response = await axiosInstance.post("", values);

    return response.data;
  }
);

export const checkAuthorization = createAsyncThunk(
  "auth/checkAuthorization",
  () => {
    return localStorage.getItem(ACCESS_TOKEN);
  }
);

export const loginReducer = createSlice({
  name: "auth",
  initialState: {
    isAuth: localStorage.getItem(ACCESS_TOKEN) ? true : false,
    statusCode: 0,
    userName: "",
    pendingLogin: false,
    errorLogin: false,
    initialLoading: false,
    success: false,
  },

  reducers: {
    logOut: (state) => {
      state.isAuth = false;
      localStorage.removeItem(ACCESS_TOKEN);
    },
  },

  extraReducers: {
    [checkAuthorization.fulfilled]: (state, action) => {
      state.isAuth = true;
      state.initialLoading = false;
      state.expiredToken = false;
      state.profile = action.payload;
    },

    [checkAuthorization.rejected]: (state, error) => {
      state.isAuth = false;
      state.expiredToken = true;
      state.initialLoading = false;
      state.profile = {};
      state.statusCode = Number(error.error.message);
    },

    [sendLoginData.fulfilled]: (state, action) => {
      state.success = true;
      state.errorLogin = false;
      state.pendingLogin = false;
      state.isAuth = true;
      state.userName = action.payload.name;
      localStorage.setItem(ACCESS_TOKEN, action.payload.token);
    },

    [sendLoginData.pending]: (state) => {
      state.isAuth = false;
      state.expiredToken = true;
      state.errorLogin = false;
      state.success = false;
      state.pendingLogin = true;
    },

    [sendLoginData.rejected]: (state, error) => {
      state.statusCode = Number(error.error.message);
      state.isAuth = false;
      state.expiredToken = true;
      state.success = false;
      state.errorLogin = true;
      state.pendingLogin = false;
    },
  },
});

export const { logOut } = loginReducer.actions;

export default loginReducer.reducer;
