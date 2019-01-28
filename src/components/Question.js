import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import QuestionUnanswered from './QuestionUnanswered'
import QuestionAnswered from './QuestionAnswered'

class Question extends Component {

  render() {
    let { alreadyAnswered } = this.props

    return(
      <div>
        <br></br>
        <br></br>
        <h1 className='text-center'>Would You Rather...</h1>
        <br></br>

        {/* // Gonna pass paramId & question via ownProps in Redux, so that can do the logic behind it just once instead of twice! */}
        {alreadyAnswered === true
          ? <QuestionAnswered />
          : <QuestionUnanswered />
        }
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }, { match }) {

  let paramId = match.params.id

  // get loggedin user's answers keys, so that can see whether already answered or not
  let user = _.pick(users, authedUser.id)[authedUser.id]
  let answersKeys = Object.keys(user.answers)

  return {
    alreadyAnswered: _.includes(answersKeys, paramId),
  }
}

export default connect(mapStateToProps)(Question)
