import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

  testing = () => {
    console.log('DUDE')
    console.log(this.props.questions['8xf0y6ziyjabvozdd253nd'].author)
  }

  render() {
    console.log("HOME Component:")
    console.log(this.props)
    let { questions, authedUser } = this.props
    return(
      <div>
        <h1>Home</h1>
        <p>User: {questions['8xf0y6ziyjabvozdd253nd'].author}</p>
          {/* <p>current user: {this.props.authedUser}</p> */}
        <ul>
          {/* {this.props.questions.map((question) => (
            <li key={question.id}>{question.optionOne}</li>
          ))} */}
        </ul>
        <button onClick={this.testing}>TEST PROPS</button>
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
