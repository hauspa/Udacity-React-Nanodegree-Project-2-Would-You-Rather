import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutAuthedUser } from '../actions/authedUser'

class Logout extends Component {

  logout = () => {
    this.setState((prevState) => ({
      selectedUser: ''
    }))
    this.props.dispatch(logoutAuthedUser())
  }

  render() {
    return(
      <div>
        <p>authedUser: {this.props.authedUser.name || "NOBODY"}</p> {/* authedUser.id doesn't work, because at that point it's still null!!!! not an object yet!!! */}
        <h4>{this.props.authedUser.name}, are you sure you want to logout?</h4>
        <br></br>
        <button className="btn btn-outline-success" type="button" onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Logout)
