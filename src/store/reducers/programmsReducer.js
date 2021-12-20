import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

// export const getShortProgramms = createAsyncThunk(
//   "programms/getShortProgramms",
//   async () => {
//     const response = await axiosInstance.get();

//     return response.data;
//   }
// );

export const getFullProgramms = createAsyncThunk(
  "programms/getFullProgramms",
  async () => {
    const response = await axiosInstance.get("get_price.php");

    return response.data;
  }
);

export const sendCourseData = createAsyncThunk(
  "programms/sendCourseData",
  async (value) => {
    const response = await axiosInstance.post("send_pay_request.php", value);

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

    // [getShortProgramms.fulfilled]: (state, action) => {
    //   state.shortProgramms = action.payload;
    // },
  },
});

export default programmsReducer.reducer;
