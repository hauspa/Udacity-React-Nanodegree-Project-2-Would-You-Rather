const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
const ADD_QUESTION      = 'ADD_QUESTION'
const UPDATE_QUESTION   = 'UPDATE_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestion(question) {
  return{
    type: ADD_QUESTION,
    question
  }
}

export function updateQuestion(questionId, option, userId) {
  return {
    type: UPDATE_QUESTION,
    questionId,
    option,
    userId,
  }
}
