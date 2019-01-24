import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Login extends Component {

  render() {
    console.log('LOGIN')
    console.log(this.props)
    let { authedUser, users, loading } = this.props
    return(
      <div>
        <h3>LOGIN</h3>
        <p>authedUser: {authedUser || "NOBODY"}</p> {/* authedUser.id doesn't work, because at that point it's still null!!!! not an object yet!!! */}
        {
          loading === true // still loading
            ? null
            : authedUser === null // check if logged in user yet
              ? (
                <Fragment>
                  {
                    Object.values(users).map((user) => (
                      

                      <div className="row align-items-center mt-1" key={user.id}>
                        <div className="col bg-primary mx-auto">
                          <img src={window.location.origin + user.avatarURL} width="50" height="50" className="d-inline-block align-top rounded" alt="Profile Picture" />
                          <span>{user.name}</span>
                        </div>
                      </div>
                    ))
                  }
                  <br></br>
                  <button className="btn btn-outline-success" type="button" onClick={this.login}>Log in</button>
                </Fragment>
              )
              : null
              // TODO: redirect to Home Page, because already logged in
              // TODO: Or actually, have UI for logging out!!!!
              // TODO: and show currently authed User too
        }

        <br></br>
        <br></br>
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
    loading: users === null,
  }
}

export default connect(mapStateToProps)(Login)
