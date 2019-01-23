import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'

import { addQuestion } from './actions/questions'
import { receiveUsers } from './actions/users'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// TESTING Store:

// Receive users
// store.dispatch(
//   receiveUsers()
// )

// Add Question
store.dispatch(
  addQuestion({
    "007": {
      id: '007',
      author: 'jamesbond',
      timestamp: 1467166872639,
      optionOne: {
        votes: ['jamesbond'],
        text: 'geschüttelt',
      },
      optionTwo: {
        votes: [],
        text: 'gerührt'
      }
    },
  })
);
