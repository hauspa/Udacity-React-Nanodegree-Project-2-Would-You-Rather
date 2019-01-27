import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends Component {

  state = {
    path: window.location.pathname
  }

  goToLogin = () => {
    // TODO: go to Login Page for loggin
  }


  render() {
    let { pathname } = this.props.location
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Would You Rather...?</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact to="/" activeClassName={ pathname === '/' ? 'active' : '' } className="nav-item nav-link">Home</NavLink>
            <NavLink to="/add" activeClassName={ pathname === '/add' ? 'active' : '' } className="nav-item nav-link">Add Question</NavLink>
            <NavLink to="/leaderboard" activeClassName={ pathname === '/leaderboard' ? 'active' : '' } className="nav-item nav-link">Leaderboard</NavLink>
            </div>
          </div>          
          <div className="navbar-nav navbar-right">
            {
              this.props.loggedIn === true
              ? (
                <div className="navbar-brand navbar-right">
                  <span>Hello, {this.props.authedUser.name}!</span>
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

export default withRouter(connect(mapStateToProps)(Navbar))
