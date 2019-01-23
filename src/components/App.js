import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import Home from './Home'
import Login from './Login'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from '../actions/shared'
import { addQuestion, updateVotes } from '../actions/questions'
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
    let answer = {'loxhs1bqm25b708cmbf3g' : 'optionOne'}
    this.props.dispatch(addUserAnswers(id, answer))

    // testing ADD_USER_QUESTIONS
    this.props.dispatch(addUserQuestions(id, questionId))

    // testing SET_AUTHED_USER
    this.props.dispatch(setAuthedUser(id))

    // testing UPDATE_VOTES
    this.props.dispatch(updateVotes(questionId, 'optionOne', id))
    this.props.dispatch(updateVotes(questionId, 'optionTwo', 'Michael Scott'))
  }

  logTesting = () => {
    console.log(this.props)
  }

  render() {
    console.log('DUDE')
    console.log(this.props)
    return (
      this.props.loading === true
        ? <LoadingBar />
        : this.props.loggedIn === true
          ? <Home />
          : <Login />
        // (
        //     <div className="App">
        //       <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //           Edit <code>src/App.js</code> and save to reload.
        //         </p>
        //         <p>Dude</p>
        //         <a
        //           className="App-link"
        //           href="https://reactjs.org"
        //           target="_blank"
        //           rel="noopener noreferrer"
        //           >
        //             Learn React
        //           </a>
        //           <br></br>
        //           <br></br>
        //           <button onClick={this.testingStore}>TESTING</button>
        //           <br></br>
        //           <button onClick={this.logTesting}>LOG</button>
        //         </header>
        //     </div>
        // )
    )
  }
}

function mapStateToProps({ users, questions, authedUser, }) {
  return {
    loading: (Object.keys(users).length === 0 && users.constructor === Object) || (Object.keys(questions).length === 0 && questions.constructor === Object), // check whether data is already loaded
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App)
