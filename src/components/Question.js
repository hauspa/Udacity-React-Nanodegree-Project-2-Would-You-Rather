import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

class Question extends Component {



  render() {
    let paramId = 'loxhs1bqm25b708cmbf3g' // = unanswered question
    // let paramId = '6ni6ok3ym7mf1p33lnez' // = answered question
    let { question } = this.props

    return(
      <div>
        <h3 className='text-center'>Question</h3>
        Question ID: {this.props.question.author}

        <h3 className='text-center'>Would You Rather...</h3>

        <br></br>

        {/* TODO: UI for unanswered question */}

        <div className='row'>
          <div className='col-lg-5 align-self-center'>
            <div className="card mx-auto text-center" style={{ width: 20 + 'em' }}>
              {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">{question.optionOne.text}</p>
                <a href="#" className="btn btn-primary">Vote</a>
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
                <a href="#" className="btn btn-primary">Vote</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, }) {
  // TODO: get param from URL later on w/Router
  let paramId = 'loxhs1bqm25b708cmbf3g' // = unanswered question
  // let paramId = '6ni6ok3ym7mf1p33lnez' // = answered question
  return {
    question: _.pick(questions, paramId)[paramId],
  }
}

export default connect(mapStateToProps)(Question)
