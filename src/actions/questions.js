import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION      = 'ADD_QUESTION'
export const UPDATE_VOTES      = 'UPDATE_VOTES'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function addQuestion(question) {
  return{
    type: ADD_QUESTION,
    question
  }
}

export function handleNewQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {

    let { authedUser } = getState()
    console.log('Handling New Question')

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser.id
    }) // add in API/DATA first
      // .then((formattedQuestion) => console.log('Formatted:', formattedQuestion))
      .then((formattedQuestion) => dispatch(addQuestion(formattedQuestion))) // add in Redux
      .then(() => dispatch(hideLoading()))
      .then(() => console.log('Finished Handling New Question'))

      // TODO: also gotta add in user object!!!!
  }
}


export function updateVotes(questionId, option, userId) {
  return {
    type: UPDATE_VOTES,
    questionId,
    option,
    userId,
  }
}
