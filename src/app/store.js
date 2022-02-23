import { configureStore } from "@reduxjs/toolkit";

import topicsReducer from '../features/topics/topicSlice'
import  quizzReducer  from "../features/quizzes/quizzesSlice";
import cardsReducer  from "../features/cards/cardsSlice";

export default configureStore({
  reducer: 
  {
    topics: topicsReducer,
    quizzes: quizzReducer,
    cards: cardsReducer
  },
});
