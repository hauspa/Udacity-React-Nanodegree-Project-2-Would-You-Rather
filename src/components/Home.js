import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class Home extends Component {

  state = {
    'showUnanswered': true
  }

  changePagination = (showUnanswered) => {
    this.setState((prevState) => ({
      showUnanswered: showUnanswered
    }))
  }

  componentDidMount = () => {
    // let { users }
  }

  render() {
    let { questions, authedUser, users } = this.props

    // TODO: instead of executing this every single rendering, maybe better if this is in component and using component state?
    // get current user object
    let userObject = _.pickBy(users, (user) => user.id === authedUser.id) // like filter for objects. could use _.pick() too
    let user = userObject[authedUser.id]
    let answersKeys = Object.keys(user.answers)
    let questionsKeys = Object.keys(questions)
    let unansweredKeys = _.difference(questionsKeys, answersKeys)

    let questionsUnanswered = _.pick(questions, unansweredKeys)
    let questionsAnswered = _.pick(questions, answersKeys)

    // show questions depending on show unanswered or answered questions
    let questionsByCategory = this.state.showUnanswered ? questionsUnanswered : questionsAnswered

    // convert to array and sort by timestamp
    let sortedQuestions = Object.values(questionsByCategory).sort((a,b,) => b.timestamp - a.timestamp)

    return(
      <div>
        <h1 className='text-center mt-3'>Home</h1>

        <br></br>

        <nav>
          <ul className="pagination pagination-lg justify-content-center">
            <li className={"page-item " + (this.state.showUnanswered ? 'active' : '')} onClick={() => this.changePagination(true)}><button className="page-link">Unanswered questions</button></li>
            <li className={"page-item " + (this.state.showUnanswered ? '' : 'active')} onClick={() => this.changePagination(false)}><button className="page-link">Answered questions</button></li>
          </ul>
        </nav>


        <div className='questions mx-auto'>
          {sortedQuestions.map((question) => (
            <Link to={`/questions/${question.id}`} className='questionBox' key={question.id}>
            <div className='row mt-4 m-3 text-center border rounded'>
              <div className='col'>
                <div className='row bg-dark align-items-center'>
                  <div className='wouldRather col p-3'>
                    Would You Rather
                  </div>
                </div>
                <div className='row bg-success'>
                  <div className='option col-5 p-2'>
                    <div className='row h-100 align-items-center'>
                      <div className='col'>
                        {question.optionOne.text}
                      </div>
                    </div>
                  </div>
                  <div className='col-2 bg-danger'>
                    <div className='row h-100 align-items-center'>
                      <div className='or col'>
                        OR
                      </div>
                    </div>
                  </div>
                  <div className='option col-5 p-2'>
                    <div className='row h-100 align-items-center'>
                      <div className='col'>
                        {question.optionTwo.text}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='author col bg-dark'>
                    <div className='row h-100 d-flex flex-column p-2'>
                      <div className='col mt-1'>
                        <img src={window.location.origin + user.avatarURL} alt={user.name} width="40" height="40" className='rounded mr-2' />
                      </div>
                      <div className='col mt-1'>
                        {question.author}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users, }) {
  return {
    authedUser,
    questions,
    users,
  }
}

export default connect(mapStateToProps)(Home)
