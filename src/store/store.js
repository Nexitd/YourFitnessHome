import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./reducers/articlesReducer";
import programmsReducer from "./reducers/programmsReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    programms: programmsReducer,
    auth: authReducer,
  },
});

export default store;
