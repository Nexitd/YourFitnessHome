import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const getShortProgramms = createAsyncThunk(
  "programms/getShortProgramms",
  async () => {
    const response = await axiosInstance.get();

    return response.data;
  }
);

export const getFullProgramms = createAsyncThunk(
  "programms/getFullProgramms",
  async () => {
    const response = await axiosInstance.get();

    return response.data;
  }
);

export const programmsReducer = createSlice({
  name: "programms",
  initialState: {
    shortProgramms: [],
    fullProgramms: [],
  },

  reducers: {},
  extraReducers: {
    [getFullProgramms.fulfilled]: (state, action) => {
      state.fullProgramms = action.payload;
    },

    [getShortProgramms.fulfilled]: (state, action) => {
      state.shortProgramms = action.payload;
    },
  },
});

export default programmsReducer.reducer;
