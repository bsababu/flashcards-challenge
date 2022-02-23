import { configureStore } from "@reduxjs/toolkit";

import {topicsSlice} from '../features/topics/topicSlice'

export default configureStore({
  reducer: 
  {topics: topicsSlice},
});
