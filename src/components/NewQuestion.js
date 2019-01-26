import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {

  handleCreate = () => {
    // TODO: dispatch to adding the question to questions object
    // TODO: before adding, gotta get timestamp and get API from _DATA.js
  }

  render() {
    return(
      // TODO: form, maybe with 'or' in between
      // TODO: if one of the fields is empty, then show that input in red or make button disabled!
      <div>
        New Question
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(NewQuestion)
