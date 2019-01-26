import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

class Leaderboard extends Component {



  render() {

    let { authedUser, users } = this.props

    let sortedUsers = Object.values(users).sort((a,b) => (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length))
    console.log('Users: ', sortedUsers)

    let leaderIndex = 0 // because ordered list doesn't work with Bootstrap

    return(
      <div>
        <h3>Leaderboard</h3>
        <ul className='list-group'>
          {sortedUsers.map((user) => {
            leaderIndex++ // because ordered list doesn't work with Bootstrap
            return (
              <li key={user.id} className={ 'list-group-item mb-1 ' + (authedUser.id === user.id ? 'border border-success' : '') }>
                {/* <div className='row'>
                  <div className='col'>

                  </div>
                </div> */}
                {leaderIndex}: {user.name}: {user.questions.length + Object.keys(user.answers).length}
              </li>
            )
          })}
        </ul>
      </div>
      // TODO: Leaderboard UI -> ordered list
      // TODO: sort by score
      // TODO: AuthedUser highlighted by color border!
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Leaderboard)
