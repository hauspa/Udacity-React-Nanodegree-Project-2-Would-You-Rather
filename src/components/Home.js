import React, { Component } from 'react'
import { connect } from 'react-redux'
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

    // get current user object
    let userObject = _.pickBy(users, (user) => user.id === authedUser.id) // like filter for objects. could use _.pick() too
    let user = userObject[authedUser.id]
    console.log("User: ", user.name)
    console.log(user)
    let answersKeys = Object.keys(user.answers)
    console.log(answersKeys)
    let questionKeys = Object.keys(questions)
    console.log(questionKeys)

    let questionsUnansweredKeys = _.difference(questionKeys, answersKeys)
    console.log("Difference: ", questionsUnansweredKeys)

    let questionsUnansweredObject = _.pick(questions, questionsUnansweredKeys)
    console.log("Unanswered: ", questionsUnansweredObject)

    let questionsAnsweredObject = _.pick(questions, answersKeys)
    console.log("Answered: ", questionsAnsweredObject)


    // let questionsToShow = this.state.showUnanswered ?  : questionsAnsweredObject

    return(
      <div>
        <h1 className='text-center'>Home</h1>

        <br></br>

        <nav>
          <ul className="pagination pagination-lg justify-content-center">
            <li className={"page-item " + (this.state.showUnanswered ? 'active' : '')} onClick={() => this.changePagination(true)}><a className="page-link">Unanswered questions</a></li>
            <li className={"page-item " + (this.state.showUnanswered ? '' : 'active')} onClick={() => this.changePagination(false)}><a className="page-link">Answered questions</a></li>
          </ul>
        </nav>

        <br></br>

        <div className='questions mx-auto'>
          {Object.values(questions).map((question) => (
            <a key={question.id}>
              <div className='row mt-4 border border-warning rounded'>
                <div className='col'>
                  <div className='row bg-success'>
                    <div className='col bg-warning text-center'>
                      Would You Rather...
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-5 bg-secondary text-center'>
                      {question.optionOne.text}
                    </div>
                    <div className='col-2 bg-danger text-center'>
                      <div className='row bg-warning'>
                        <div className='col bg-success align-items-end'>
                          <span className="">OR</span>
                        </div>
                      </div>
                    </div>
                    <div className='col-5 bg-primary text-center'>
                      {question.optionTwo.text}
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col text-center'>
                      by {question.author}
                    </div>
                  </div>
                </div>
              </div>
            </a>
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