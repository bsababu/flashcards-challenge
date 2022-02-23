import {createSlice} from '@reduxjs/toolkit'

export const topicsSlice = createSlice({
   name: "Topics",
   initialState: {topics: {}} ,
   reducers: {
     addTopic: (state, action) =>{ 
       const {id, name, icon} = action.payload
       state.topics[id] = {
         topid: id,
         name: name,
         icon:icon,
         quizIds: []
       }

       return state;
    },
    addQuizId: (state, action) => {
      const {topid, quizId} = action.payload;
      state.topics[topid].quizIds.push(quizId);
    }
   }
 })
 export const selectTopic = (state) => {
   return state.topics.topics
 }

 export const {addTopic, addQuizId} = topicsSlice.actions;

 export default  topicsSlice.reducer;