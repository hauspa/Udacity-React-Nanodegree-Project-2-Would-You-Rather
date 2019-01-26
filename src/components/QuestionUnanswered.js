import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { updateVotes } from '../actions/questions'
import { addUserAnswer } from '../actions/users'

class QuestionUnanswered extends Component {

  handleVote = (option) => {
    let { authedUser, paramId } = this.props
    let answer = {[paramId]: option }
    let userId = authedUser.id

    // add the vote to the questions' object
    this.props.dispatch(updateVotes(paramId, option, userId))

    // TODO: make sure it doesn't switch to QuestionAnswered before both are updated, otherwise might cause a bug!
    // in Question component, updating by checking user object, not question object => update user object after question object.
    // even though addUserAnswer is after updateVotes, since it's asynch, might update first.

    // add this poll/the vote to the answers in the user's object
    this.props.dispatch(addUserAnswer(userId, answer))
  }

  render() {
    let { question } = this.props
    return(
      <div className='row'>
        <div className='col-lg-5 align-self-center'>
          <div className="card mx-auto text-center text-white bg-success" style={{ width: 20 + 'em' }}>
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">{question.optionOne.text}</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary" onClick={() => this.handleVote('optionOne')}>Vote</button>
            </div>
          </div>
        </div>
        <div className='col-lg-2 text-center align-self-center or'>
          or
          {/* <p className='align-self-center bg-secondary'>OR</p> */}
          {/* <div className='row bg-success align-self-center'>
            <div className='col align-self-center'>
              <span className='bg-danger'>OR</span>
            </div>
          </div> */}
        </div>
        <div className='col-lg-5 align-self-center'> {/* offset-md-2 */}
          <div className="card mx-auto text-center text-white bg-warning" style={{ width: 20 + 'em' }}>
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">{question.optionTwo.text}</p>
              {/* <a className="btn btn-primary" onClick={() => this.handleVote(false)}>Vote</a> */}
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary" onClick={() => this.handleVote('optionTwo')}>Vote</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }, { paramId, question }) {
  return {
    authedUser,
    paramId,
    question,
  }
}

export default connect(mapStateToProps)(QuestionUnanswered)
