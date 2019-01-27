import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { BrowserRouter as Router } from 'react-router-dom'

// Styling
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
