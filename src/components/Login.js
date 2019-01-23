import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {

  render() {
    console.log('LOGIN')
    console.log(this.props)
    return(
      <div>
        <h1>LOGIN</h1>
        <p>authedUser: {this.props.authedUser || "DUDE"}</p>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect()(Login)
