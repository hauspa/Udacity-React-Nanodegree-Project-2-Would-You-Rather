import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

/*
// Dispatch an action to set the user
// (since initial state is empty)
store.dispatch({
  type: "SET_USER",
  user: {
    avatar: "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b",
    name: "Dave",
    followers: 1234,
    following: 123
  }
});

*/
