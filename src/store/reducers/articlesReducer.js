import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const getAllArticles = createAsyncThunk(
  "articles/getAllArticles",
  async () => {
    const response = await axiosInstance.get("get_article.php");

    return response.data;
  }
);

const articlesReducer = createSlice({
  name: "articles",
  initialState: {
    articleItems: [],
    initialLoading: true,
  },

  reducers: {},
  extraReducers: {
    [getAllArticles.fulfilled]: (state, action) => {
      state.articleItems = action.payload;
      state.initialLoading = false;
    },

    [getAllArticles.pending]: (state) => {
      state.initialLoading = true;
    },

    [getAllArticles.rejected]: (state, action) => {
      state.articleItems = action.payload;
      state.initialLoading = false;
    },
  },
});

export default articlesReducer.reducer;
