import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Home extends Component {

  login = () => {
    this.props.dispatch(setAuthedUser('michaelScott'))
  }

  render() {
    console.log("HOME Component:")
    console.log(this.props)
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
