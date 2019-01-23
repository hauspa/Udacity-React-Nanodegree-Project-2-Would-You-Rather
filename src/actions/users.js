export const RECEIVE_USERS         = 'RECEIVE_USERS'
export const ADD_USER_ANSWERS      = 'ADD_USER_ANSWERS'
export const ADD_USER_QUESTIONS    = 'ADD_USER_QUESTIONS'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addUserAnswers(id, answer){
  return {
    type: ADD_USER_ANSWERS,
    id,
    answer, // { "question ID" : "Option" }
  }
}

export function addUserQuestions(id, questionId){
  return {
    type: ADD_USER_QUESTIONS,
    id,
    questionId,
  }
}
