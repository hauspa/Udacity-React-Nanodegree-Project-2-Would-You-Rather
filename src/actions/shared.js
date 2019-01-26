import { receiveUsers, addUserQuestion } from './users'
import { receiveQuestions, addQuestion } from './questions'
import { getInitialdata, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialdata()
      .then(({ users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
      .then(() => dispatch(hideLoading()))
  }
}

export function handleNewQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {

    let { authedUser } = getState()
    console.log('Handling New Question')

    dispatch(showLoading())

    return saveQuestion({ // add in API/DATA first
      optionOneText,
      optionTwoText,
      author: authedUser.id
    })
      .then((formattedQuestion) => {
        dispatch(addQuestion(formattedQuestion)) // add in Redux, questions object
        return formattedQuestion.id // gotta return so that next .then() can use it!
      })
      .then((qid) => dispatch(addUserQuestion(authedUser.id, qid))) // add in Redux, users object
      .then(() => dispatch(hideLoading()))
      .then(() => console.log('Finished Handling New Question'))
  }
}
