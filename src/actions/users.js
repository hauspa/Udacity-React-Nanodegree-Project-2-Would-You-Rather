const RECEIVE_USERS         = 'RECEIVE_USERS'
const UPDATE_USER_QUESTIONS = 'UPDATE_USER_QUESTIONS'
const UPDATE_USER_ANSWERS   = 'UPDATE_USER_ANSWERS'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function updateUserAnswers(id, answer){
  return {
    type: UPDATE_USER_ANSWERS,
    id,
    answer, // { "question ID" : "Option" }
  }
}

export function updateUserQuestions(id, questionId){
  return {
    type: UPDATE_USER_QUESTIONS,
    id,
    questionId,
  }
}
