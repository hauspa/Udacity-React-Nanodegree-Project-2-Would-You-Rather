import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleVoteAnswer } from '../actions/shared'

class QuestionUnanswered extends Component {

  handleVote = (e) => {
    e.preventDefault() // gotta do this otherwise dispatches twice!

    let { paramId } = this.props // paramId === question id

    let option = e.target.name

    this.props.dispatch(handleVoteAnswer(paramId, option))
  }

  render() {
    let { question } = this.props
    return(
      <div className='row'>
        <div className='col-lg-5 align-self-center'>
          <div className="card mx-auto text-center text-white bg-info" style={{ width: 20 + 'em' }}>
            <div className="card-body">
              <p className="card-text">{question.optionOne.text}</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary" name='optionOne' onClick={this.handleVote}>Vote</button>
            </div>
          </div>
        </div>
        <div className='col-lg-2 text-center align-self-center or'>
          or
        </div>
        <div className='col-lg-5 align-self-center'> {/* offset-md-2 */}
          <div className="card mx-auto text-center text-white bg-info" style={{ width: 20 + 'em' }}>
            <div className="card-body">
              <p className="card-text">{question.optionTwo.text}</p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary" name='optionTwo' onClick={this.handleVote}>Vote</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, { paramId, question }) {
  return {
    paramId,
    question,
  }
}

export default connect(mapStateToProps)(QuestionUnanswered)
