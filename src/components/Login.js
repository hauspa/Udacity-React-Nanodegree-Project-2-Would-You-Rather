import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { loginAuthedUser } from '../actions/authedUser'
import Home from './Home'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  state = {
    'selectedUser': '',
    'goToHome': false
  }

  handleChange = (e) => {
    e.preventDefault()

    let targetValue = e.target.value
    this.setState((prevState) => ({
      selectedUser: targetValue
    }))
  }

  login = (e) => {
    e.preventDefault()

    // get the selected user from the Component's state
    let id = this.state.selectedUser

    // get other metadata for authedUser
    let userObject = _.pickBy(this.props.users, (user) => user.id === id) // like filter for objects
    let name = userObject[id].name
    let picture = userObject[id].avatarURL

    // save in Redux store
    this.props.dispatch(loginAuthedUser(id, name, picture))
    this.setState((prevState) => ({
      ...prevState,
      goToHome: true
    }))

    // TODO: after LOGIN => send to HOME Component!
  }

  render() {
    let { users, loading } = this.props
    let { selectedUser, goToHome } = this.state

    // if user wanted to other page, can redirect there. if directly to Login, then going to Home
    let { from } = this.props.location.state || { from: { pathname: '/' } }

    if (goToHome === true) {
      console.log('REDIRECTING to Home after loggin in')
      return <Redirect to={ from } />
    }

    return(
      <div>
        <h3 className='text-center'>Please login:</h3>
        {
          loading === true // still loading
            ? null
            : (
              <Fragment>
                {
                  // TODO: Could use Bootstrap's Card Component!!

                  Object.values(users).map((user) => (
                    <div className="form-check text-center mt-3" key={user.id}>
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
                <div className='row'>
                  <button className="btn btn-outline-success mx-auto" type="button" onClick={this.login} disabled={!selectedUser.length > 0}>Login</button>
                </div>
              </Fragment>
            )
        }
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    loading: users === null,
  }
}

export default connect(mapStateToProps)(Login)
