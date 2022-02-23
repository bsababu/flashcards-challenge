import { createSlice} from '@reduxjs/toolkit'
import { addQuizId } from '../topics/topicSlice'

export const quizzSlice = createSlice({
    name: 'Quizzes',
    initialState: {quizzes: {}},
    reducers: {
        addQuiz: (state, action) => {
            const {quizId, name, topicId, cardIds} = action.payload
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topId: topicId,
                cardIds: cardIds
            }

            // return state;
        }
    }

});

export const addQuizIdId = (quiz) => {
    const { quizId, topicId} = quiz
    return (dispatch) => {
        dispatch(quizzSlice.action.addQuiz(quiz))
        dispatch(addQuizId({
            quizId: quizId,
            topId: topicId
        }))
    }

}

export const { addQuiz} = quizzSlice.actions
export const selectQuiz = state => state.quizzes.quizzes;
export default quizzSlice.reducer;