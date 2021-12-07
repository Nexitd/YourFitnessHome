import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const getAllArticles = createAsyncThunk(
  "articles/getAllArticles",
  async () => {
    const response = await axiosInstance.get("get_article");

    return response.data;
  }
);

const articlesReducer = createSlice({
  name: "articles",
  initialState: {
    articleItems: [],
  },

  reducers: {},
  extraReducers: {
    [getAllArticles.fulfilled]: (state, action) => {
      state.articleItems = action.payload;
    },
  },
});

export default articlesReducer.reducer;
