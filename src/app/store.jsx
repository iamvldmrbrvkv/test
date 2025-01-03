import { configureStore } from "@reduxjs/toolkit";
import allQuestionsReducer from "../features/allQuestionsSlice.jsx";

const store = configureStore({
  reducer: {
    allQuestions: allQuestionsReducer
  }
});

export default store;