import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Navbar from './Navbar'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from '../actions/shared'
import { addQuestion, updateVotes } from '../actions/questions'
import { addUserAnswers, addUserQuestions } from '../actions/users'

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

    // testing UPDATE_VOTES
    this.props.dispatch(updateVotes(questionId, 'optionOne', id))
    this.props.dispatch(updateVotes(questionId, 'optionTwo', 'Michael Scott'))
  }

  logTesting = () => {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <Navbar />
        <div className='container'>
          {this.props.loading === true
            ? null
            : this.props.loggedIn === true
              ? <Home />
              : <Login />
          }
        </div>
      </div>
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
        // TODO: add 404 page for cases when website not available
        // TODO: go to Login, when users went on website using browser search bar
    )
  }
}

function mapStateToProps({ users, questions, authedUser, }) {
  return {
    loading: (Object.keys(users).length === 0 && users.constructor === Object) || (Object.keys(questions).length === 0 && questions.constructor === Object), // check whether data is already loaded
    loggedIn: authedUser !== null,
  }
}

export default connect(mapStateToProps)(App)
