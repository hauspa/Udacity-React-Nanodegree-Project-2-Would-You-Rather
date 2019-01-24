import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navbar extends Component {

  goToLogin = () => {
    // TODO: go to Login Page for loggin
  }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Would You Rather...?</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Add Question</a>
            <a className="nav-item nav-link" href="#">Leaderboard</a>
            </div>
          </div>
          <div className="navbar-nav navbar-right">
            {
              this.props.loggedIn === true
              ? (
                <div className="navbar-brand navbar-right">
                  {console.log(this.props.authedUser.name)}
                  <span>Hello, {this.props.authedUser.id}!</span>
                  <img src={window.location.origin + this.props.authedUser.avatarPath} width="30" height="30" className="d-inline-block align-top rounded" alt="Profile Picture" />
                  <button className="btn btn-outline-success" type="button" onClick={this.goToLogin}>Logout</button>
                </div>
              )
              : <button className="btn btn-outline-success" type="button" onClick={this.goToLogin}>Login</button>
            }
          </div>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    // gotta make sure entire authedUser object is loaded, not just id. otherwise won't display name & picture
    loggedIn: authedUser !== null && authedUser.name !== null && authedUser.avatarPath !== null,
  }
}

export default connect(mapStateToProps)(Navbar)
