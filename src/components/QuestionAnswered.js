import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionAnswered extends Component {
  render() {

    let { question } = this.props

    let optionOneVotes = question.optionOne.votes.length
    let optionTwoVotes = question.optionTwo.votes.length
    let totalVotes = optionOneVotes + optionTwoVotes
    let optionOnePercentage = optionOneVotes / totalVotes * 100
    let optionTwoPercentage = optionTwoVotes / totalVotes * 100

    // TODO: show what the user voted for!!!

    return(
      <div>
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" style={{ width: optionOnePercentage + '%' }} aria-valuenow={optionOnePercentage} aria-valuemin="0" aria-valuemax="100"></div>
          <div class="progress-bar bg-warning" role="progressbar" style={{ width: optionTwoPercentage + '%' }} aria-valuenow={optionTwoPercentage} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            {optionOnePercentage}%
          </div>
          <div className='col text-center'>
            {optionTwoPercentage}%
          </div>
        </div>

        <br></br>

        <div className='row'>
          <div className='col-lg-5 align-self-center'>
            <div className="card mx-auto text-center" style={{ width: 20 + 'em' }}>
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">{question.optionOne.text}</p>

              </div>
              <div class="card-footer">{question.optionOne.votes.length} users voted</div>
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
          {/* {question.} */}
          {/* <h5 className="card-title">Card title</h5> */}
          <p className="card-text">{question.optionTwo.text}</p>

        </div>
        <div class="card-footer">{question.optionTwo.votes.length} users voted</div>
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

export default connect()(QuestionAnswered)
