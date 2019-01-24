import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    let { questions, authedUser } = this.props
    return(
      <div>
        <h1>Home</h1>
        <p>User: {authedUser.id}</p>
        <p>User name: {authedUser.name}</p>
        <ul>
          {/* {this.props.questions.map((question) => (
            <li key={question.id}>{question.optionOne}</li>
          ))} */}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions,
  }
}

export default connect(mapStateToProps)(Home)
