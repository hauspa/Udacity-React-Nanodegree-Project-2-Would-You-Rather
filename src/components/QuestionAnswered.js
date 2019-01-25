import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionAnswered extends Component {
  render() {
    return(
      <div>
        Question Answered
      </div>
    )
  }
}

export default connect()(QuestionAnswered)
