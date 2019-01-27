import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

class QuestionAnswered extends Component {

  displayUserVotes = (option, votesAmount) => {
    let votedThisOption = _.includes(this.props.question[option].votes, this.props.authedUser.id)

    switch (true) {
      case (votesAmount === 1 && votedThisOption) :
        return `Only you voted`
      case (votesAmount === 1 && !votedThisOption) :
        return `1 user voted`
      case (votesAmount > 1 && votedThisOption) :
        return `${votesAmount} users voted (including you!)`
      case (votesAmount > 1 && !votedThisOption) :
        return `${votesAmount} users `
      default : // = 0
        return `Nobody voted`
    }
  }

  render() {
    let { question, authedUser } = this.props

    let optionOneVotes = question.optionOne.votes.length
    let optionTwoVotes = question.optionTwo.votes.length
    let totalVotes = optionOneVotes + optionTwoVotes
    let optionOnePercentage = optionOneVotes / totalVotes * 100
    let optionTwoPercentage = optionTwoVotes / totalVotes * 100

    let votedOptionOne = _.includes(question.optionOne.votes, authedUser.id)

    return(
      <div>
        <h4 className='text-center' style={{ fontSize: 80 + 'px' }}>
          Total Votes: {totalVotes}
        </h4>
        <br></br>

        <div className="progress" style={{ height: 30 + 'px' }}>
          <div className={'progress-bar ' + (votedOptionOne ? 'bg-success' : 'bg-danger')} role="progressbar" style={{ width: optionOnePercentage + '%', fontSize: 22 + 'px' }} aria-valuenow={optionOnePercentage} aria-valuemin="0" aria-valuemax="100">{Math.round(optionOnePercentage)}%</div>
          <div className={'progress-bar ' + (votedOptionOne ? 'bg-danger' : 'bg-success')} role="progressbar" style={{ width: optionTwoPercentage + '%', fontSize: 22 + 'px' }} aria-valuenow={optionTwoPercentage} aria-valuemin="0" aria-valuemax="100">{Math.round(optionTwoPercentage)}%</div>
        </div>

        <br></br>

        <div className='row'>
          <div className='col-lg-5 align-self-center'>
            <div className={'card mx-auto text-center text-white ' + (votedOptionOne ? 'bg-success' : 'bg-danger')} style={{ width: 20 + 'em' }}>
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              {/* <div className="card-header">{optionOnePercentage}%</div> */}
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">{question.optionOne.text}</p>
              </div>
              <div className="card-footer">{this.displayUserVotes('optionOne', question.optionOne.votes.length)}</div>
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
      <div className={'card mx-auto text-center text-white ' + (votedOptionOne ? 'bg-danger' : 'bg-success')} style={{ width: 20 + 'em' }}>
        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        {/* <div className="card-header">{optionTwoPercentage}%</div> */}
        <div className="card-body">
          {/* {question.} */}
          {/* <h5 className="card-title">{question.optionTwo.text}</h5> */}
          <p className="card-text">{question.optionTwo.text}</p>
        </div>
        <div className="card-footer">{this.displayUserVotes('optionTwo', question.optionTwo.votes.length)}</div>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }, { question }) {
  return {
    authedUser,
    question, // seems like don't even have to include ownProps, as React just passes it on anyways.
  }
}

export default connect(mapStateToProps)(QuestionAnswered)
