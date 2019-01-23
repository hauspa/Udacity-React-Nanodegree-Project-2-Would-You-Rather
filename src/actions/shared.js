import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { getInitialdata } from '../utils/api'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialdata()
      .then(({ users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}
