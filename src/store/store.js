import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./reducers/articlesReducer";
import programmsReducer from "./reducers/programmsReducer";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    programms: programmsReducer,
  },
});

export default store;
