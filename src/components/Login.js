import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {

  render() {
    console.log('LOGIN')
    console.log(this.props)
    let { authedUser, users } = this.props
    return(
      <div>
        <h3>LOGIN</h3>
        <p>authedUser: {authedUser || "DUDE"}</p>
        <ul>
          {
            Object.values(users).map((user) => (
              <li key={user.id}>{user.name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Login)
