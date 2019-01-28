import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { loginAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  state = {
    'selectedUser': '',
    'shouldRedirect': false
  }

  handleChange = (id) => {
    // save to selectedUser in local state
    this.setState((prevState) => ({
      selectedUser: id
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
      shouldRedirect: true
    }))
  }

  render() {
    let { users, loading } = this.props
    let { selectedUser, shouldRedirect } = this.state

    // if user wanted to other page, can redirect there. if directly to Login, then going to Home
    let { from } = this.props.location.state || { from: { pathname: '/' } }
    if(from.pathname === '/login' || from.pathname === '/logout') { // so that new user doesn't end up at /logout right after logging in
      from.pathname = '/'
    }

    if (shouldRedirect === true) {
      console.log('REDIRECTING to Home after loggin in')
      return <Redirect to={ from } />
    }

    return(
      <div>
        <br></br>
        <br></br>
        <h3 className='text-center'>Please login:</h3>
        <br></br>
        {
          loading === true // still loading
            ? null
            : (
              <Fragment>
                  <div className='row justify-content-center'>
                      {
                        Object.values(users).map((user) => (
                          <div key={user.id} className={'card m-2 loginCard ' + (user.id === this.state.selectedUser ? 'border-success' : '')} style={{ width: 14 + 'rem' , cursor: 'pointer' }} onClick={() => this.handleChange(user.id)}>
                            <img className="card-img-top" src={user.avatarURL} alt="Card image cap" />
                            <div className="card-body">
                              {/* <h5 className="card-title">{user.name}</h5> */}
                              <p className="card-text text-center">{user.name}</p>
                              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                          </div>
                        ))
                      }
                </div>
                <br></br>
                <br></br>
                <div className='row'>
                  <button className="btn btn-lg btn-outline-success mx-auto" type="button" onClick={this.login} disabled={!selectedUser.length > 0}>Login</button>
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
