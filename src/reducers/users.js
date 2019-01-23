import {
  RECEIVE_USERS,
  ADD_USER_ANSWERS,
  ADD_USER_QUESTIONS,
} from '../actions/users'

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_ANSWERS :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          answers: { ...state[action.id].answers, ...action.answer }
        }
      }
    case ADD_USER_QUESTIONS :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          questions: state[action.id].questions.concat([action.questionId])
        }
      }
    default :
      return state
  }
}
