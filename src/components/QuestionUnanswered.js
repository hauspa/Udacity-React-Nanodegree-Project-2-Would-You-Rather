import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
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
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">{question.optionOne.text}</p>
            </div>
            <div className="card-footer">
              {/* <button type="button" className="btn btn-primary" onClick={() => this.handleVote('optionOne')}>Vote</button> */}
              <button type="button" className="btn btn-primary" name='optionOne' onClick={this.handleVote}>Vote</button>
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
          <div className="card mx-auto text-center text-white bg-info" style={{ width: 20 + 'em' }}>
            {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">{question.optionTwo.text}</p>
              {/* <a className="btn btn-primary" onClick={() => this.handleVote(false)}>Vote</a> */}
            </div>
            <div className="card-footer">
              {/* <button type="button" className="btn btn-primary" onClick={() => this.handleVote('optionTwo')}>Vote</button> */}
              <button type="button" className="btn btn-primary" name='optionTwo' onClick={this.handleVote}>Vote</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ }, { paramId, question }) {
  return {
    paramId,
    question,
  }
}

export default connect(mapStateToProps)(QuestionUnanswered)
