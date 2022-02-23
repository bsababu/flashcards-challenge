import { createSlice} from '@reduxjs/toolkit'
import { addQuizId } from '../topics/topicSlice'

export const quizzSlice = createSlice({
    name: 'Quizzes',
    initialState: {quizzes: {}},
    reducers: {
        addQuiz: (state, action) => {
            const {quizId, name, topId, cardIds} = action.payload
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topId: topId,
                cardIds: cardIds
            }

            return state;
        }
    }

});

export const addQuizIdId = (quiz) => {
    const { quizId, topId} = quiz
    return (dispatch) => {
        dispatch(quizzSlice.action.addQuiz(quiz))
        dispatch(addQuizId({
            quizId: quizId,
            topId: topId
        }))
    }

}

export const { addQuiz} = quizzSlice.action
export const selectQuiz = state => state.quizzes.quizzes;
export default quizzSlice.reducer;