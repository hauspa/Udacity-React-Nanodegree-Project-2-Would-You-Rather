import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { getInitialdata } from '../utils/api'
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
