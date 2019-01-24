import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    let { questions, authedUser } = this.props
    return(
      <div>
        <h1 className='text-center'>Home</h1>      
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

function mapStateToProps({ authedUser, questions, }) {
  return {
    authedUser,
    questions,
  }
}

export default connect(mapStateToProps)(Home)
