import { configureStore } from "@reduxjs/toolkit";
// import allQuestionsReducer from "../features/allQuestionsSlice.jsx";
import { apiSlice } from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    // allQuestions: allQuestionsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      // .prepend(listenerMiddleware.middleware)
      .concat(apiSlice.middleware)
});

export default store;