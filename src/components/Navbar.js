import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Navbar extends Component {

  login = () => {
    this.props.dispatch(setAuthedUser('michaelScarn', 'Michael Scott', '/avatars/michaelScott.jpg'))
  }

  render() {
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
          <div class="navbar-nav navbar-right">
            {
              this.props.authedUser !== null
              ? (
                <div className="navbar-brand navbar-right">
                  <span>Hello, {this.props.authedUser.name}!</span>
                  <img src={window.location.origin + this.props.authedUser.avatarPath} width="30" height="30" className="d-inline-block align-top rounded" alt="" />
                </div>
              )
              : (
                <button className="btn btn-outline-success" type="button" onClick={this.login}>Log in</button>
              )
            }
          </div>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loggedIn: authedUser !== null,
  }
}

export default connect(mapStateToProps)(Navbar)
