import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import { handleInitialData } from '../actions/shared'
import { addQuestion } from '../actions/questions'
import { addUserAnswers, addUserQuestions } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())

  }

  testingStore = () => {
    let id = 'johndoe'
    let questionId = '007blabla'
    // testing ADD_QUESTION
    this.props.dispatch(addQuestion({
      [questionId]: {
        id: questionId,
        author: 'jamesbond',
        timestamp: 1467166872688,
        optionOne: {
          votes: ['jamesbond'],
          text: 'dude',
        },
        optionTwo: {
          votes: [],
          text: 'bro'
        }
      },
    }))

    // testing ADD_USER_ANSWERS
    let answer = {}
    this.props.dispatch(addUserAnswers(id, {'loxhs1bqm25b708cmbf3g' : 'optionOne'}))

    // testing ADD_USER_QUESTIONS
    this.props.dispatch(addUserQuestions(id, questionId))

    // testing SET_AUTHED_USER
    this.props.dispatch(setAuthedUser(id))
  }

  logTesting = () => {
    console.log(this.props)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Dude</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br></br>
          <br></br>
          <button onClick={this.testingStore}>TESTING</button>
          <br></br>
          <button onClick={this.logTesting}>LOG</button>
        </header>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
