// Modules
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

// Custom Styling
import '../style.css';

// Action
import { handleInitialData } from '../actions/shared'

// Components
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Navbar from './Navbar'
import Question from './Question'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import ErrorPage from './ErrorPage'
import ProtectedRoute from './ProtectedRoute'
import LoadingBar from 'react-redux-loading-bar'



// save as property, so that when changing URL anytime, there's no problem!
let prefixForQuestions = '/questions/'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    let { loading, loggedIn, questions, qid } = this.props
    return (
      <div>
        <LoadingBar />
          {loading === true
            ? null
            : (
              <Fragment>
                <Navbar />
                <Switch>
                  <Route exact path='/login' component={Login} />
                  <ProtectedRoute exact path='/' component={Home} isLoggedIn={loggedIn} />
                  <ProtectedRoute exact path='/logout' component={Logout} isLoggedIn={loggedIn} />
                  <ProtectedRoute exact path='/add' component={NewQuestion} isLoggedIn={loggedIn} />
                  <ProtectedRoute exact path='/leaderboard' component={Leaderboard} isLoggedIn={loggedIn} />
                  {/* make sure in Question that ID is valid */}
                  {
                    Object.keys(questions).includes(qid) &&
                      <ProtectedRoute path={`${prefixForQuestions}:id`} component={Question} isLoggedIn={loggedIn} />
                  }
                  <Route component={ErrorPage} />
                </Switch>
              </Fragment>
            )
          }
      </div>
    )
  }
}

function mapStateToProps({ users, questions, authedUser, }, { location }) {
  // match is only in props when component is passed on via <Route>, so gotta use location!

  return {
    loading: (Object.keys(users).length === 0 && users.constructor === Object) || (Object.keys(questions).length === 0 && questions.constructor === Object), // check whether data is already loaded
    loggedIn: authedUser !== null,
    questions,
    qid: location.pathname.substring(prefixForQuestions.length),
  }
}

export default withRouter(connect(mapStateToProps)(App))
