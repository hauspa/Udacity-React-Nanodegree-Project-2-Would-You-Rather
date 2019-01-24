import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { loginAuthedUser, logoutAuthedUser } from '../actions/authedUser'

class Login extends Component {

  state = {
    'selectedUser': ''
  }

  handleChange = (e) => {
    let targetValue = e.target.value
    this.setState((prevState) => ({
      selectedUser: targetValue
    }))
  }

  login = () => {
    // get the selected user from the Component's state
    let id = this.state.selectedUser

    // get other metadata for authedUser
    let userObject = _.pickBy(this.props.users, (user) => user.id === id) // like filter for objects
    let name = userObject[id].name
    let picture = userObject[id].avatarURL

    // save in Redux store
    this.props.dispatch(loginAuthedUser(id, name, picture))

    // TODO: after LOGIN => send to HOME Component!
  }

  logout = () => {
    this.props.dispatch(logoutAuthedUser())
  }

  render() {
    let { authedUser, users, loading } = this.props
    return(
      <div>
        <h3>LOGIN</h3>
        {
          loading === true // still loading
            ? null
            : authedUser === null // check if logged in user yet
              ? (
                <Fragment>
                  {
                    Object.values(users).map((user) => (
                      <div className="form-check" key={user.id}>
                        <input onChange={this.handleChange} className="form-check-input" type="radio" name="usersRadios" id={user.id} value={user.id} />
                        <label className="form-check-label" htmlFor={user.id}>
                          {user.name}
                        </label>
                      </div>
                      // <div className="row align-items-center mt-1" key={user.id}>
                      //   <div className="col bg-primary mx-auto">
                      //     <img src={window.location.origin + user.avatarURL} width="50" height="50" className="d-inline-block align-top rounded" alt="Profile Picture" />
                      //     <span>{user.name}</span>
                      //   </div>
                      // </div>
                    ))
                  }
                  <br></br>
                  <button className="btn btn-outline-success" type="button" onClick={this.login} disabled={!this.state.selectedUser.length > 0}>Login</button>
                </Fragment>
              )
              : (
                <div>
                  <p>authedUser: {authedUser.name || "NOBODY"}</p> {/* authedUser.id doesn't work, because at that point it's still null!!!! not an object yet!!! */}
                  <h4>{authedUser.name}, are you sure you want to logout?</h4>
                  <br></br>
                  <button className="btn btn-outline-success" type="button" onClick={this.logout}>Logout</button>
                </div>
              )
        }
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
