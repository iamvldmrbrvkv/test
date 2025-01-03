import { createSlice } from "@reduxjs/toolkit";
import { data } from "../mocks/data";

const initialState = data;

const allQuestionsSlice = createSlice({
  name: "allQuestions",
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const question = state.find(question => question.question === action.payload.question);
      question.answered = true;
    }
  }
});

export const { answerQuestion } = allQuestionsSlice.actions;
export default allQuestionsSlice.reducer;