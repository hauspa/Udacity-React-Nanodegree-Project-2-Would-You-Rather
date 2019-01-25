import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { updateVotes } from '../actions/questions'
import { addUserAnswer } from '../actions/users'

// TODO: get param from URL later on w/Router
let paramId = 'loxhs1bqm25b708cmbf3g' // = unanswered question
// let paramId = '6ni6ok3ym7mf1p33lnez' // = answered question


class Question extends Component {

  handleVote = (option) => {
    let answer = {[paramId]: option }
    let userId = this.props.authedUser.id

    // add this poll/the vote to the answers in the user's object
    this.props.dispatch(addUserAnswer(userId, answer))

    // add the vote to the questions' object
    this.props.dispatch(updateVotes(paramId, option, userId))
  }

  testingLog = () => {
    // have to log seperately. when calling right after Redux store action, it will be async and still running
    console.log('Users: ', this.props.users)
    console.log('Questions: ', this.props.questions)
  }

  render() {
    let { question } = this.props

    return(
      <div>
        <h3 className='text-center'>Question</h3>
        Question ID: {this.props.question.author}

        <h3 className='text-center'>Would You Rather...</h3>

        <button type="button" className="btn btn-primary" onClick={() => this.testingLog()}>LOG USERS & QUESTIONS</button>

        <br></br>

        {/* TODO: UI for unanswered question */}

        <div className='row'>
          <div className='col-lg-5 align-self-center'>
            <div className="card mx-auto text-center" style={{ width: 20 + 'em' }}>
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">{question.optionOne.text}</p>
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
            <div className="card mx-auto text-center" style={{ width: 20 + 'em' }}>
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">{question.optionTwo.text}</p>
                {/* <a className="btn btn-primary" onClick={() => this.handleVote(false)}>Vote</a> */}
                <button type="button" className="btn btn-primary" onClick={() => this.handleVote('optionTwo')}>Vote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    question: _.pick(questions, paramId)[paramId],
    authedUser,
    // JUST FOR TESTING, can delete again later!
    users,
    questions,
  }
}

export default connect(mapStateToProps)(Question)
