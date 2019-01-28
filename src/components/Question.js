import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import QuestionUnanswered from './QuestionUnanswered'
import QuestionAnswered from './QuestionAnswered'

class Question extends Component {

  render() {
    let { question, alreadyAnswered } = this.props
    let paramId = this.props.match.params.id

    return(
      <div>
        <br></br>
        <br></br>
        <h1 className='text-center'>Would You Rather...</h1>
        <br></br>

        {/* // Gonna pass paramId & question via ownProps in Redux, so that can do the logic behind it just once instead of twice! */}
        {alreadyAnswered === true
          ? <QuestionAnswered question={question} />
          : <QuestionUnanswered paramId={paramId} question={question} />
        }
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }, { match }) {

  // get loggedin user's answers keys, so that can see whether already answered or not
  let user = _.pick(users, authedUser.id)[authedUser.id]
  let answersKeys = Object.keys(user.answers)
  let paramId = match.params.id

  return {
    question: _.pick(questions, paramId)[paramId],
    alreadyAnswered: _.includes(answersKeys, paramId),
    authedUser,
  }
}

export default connect(mapStateToProps)(Question)
