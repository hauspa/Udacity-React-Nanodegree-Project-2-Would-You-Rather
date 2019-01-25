import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionUnanswered extends Component {
  render() {
    return(
      <div>
        Question Unanswered
      </div>
    )
  }
}

export default connect()(QuestionUnanswered)
