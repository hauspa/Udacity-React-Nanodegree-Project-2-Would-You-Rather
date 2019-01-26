import React, { Component, Fragment } from 'react'
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
        {/* // TODO: just do it as normal div and use styling to make it look better */}
        {/* <ul className='list-group'> */}
        <Fragment>
          {sortedUsers.map((user) => {
            leaderIndex++ // because ordered list doesn't work with Bootstrap
            return (
              // <li key={user.id} className={ 'list-group-item mb-1 ' + (authedUser.id === user.id ? 'border border-success' : '') }>
              //    {leaderIndex}) {user.name}: {user.questions.length + Object.keys(user.answers).length}
              // </li>
              <div key={user.id} className={'row mb-2 rounded border ' + (authedUser.id === user.id ? 'border-success' : 'border-light')}>
                <div className='col bg-primary text-center p-5'>
                  {leaderIndex}
                </div>
                <div className='col bg-success'>
                  <img src={window.location.origin + user.avatarURL} alt={user.name} width="30" height="30" />
                  {user.name}
                </div>
                <div className='col bg-info'>
                  Questions: {user.questions.length}
                </div>
                <div className='col bg-warning'>
                  Answers: {Object.keys(user.answers).length}
                </div>
                <div className='col bg-info'>
                  <div className='row d-flex flex-column bg-warning justify-content-center' style={{ height: 100 + '%'}}>
                    <div className='text-center bg-success '>
                      {user.questions.length + Object.keys(user.answers).length}
                    </div>
                    <div className='text-center bg-danger '>
                      Total
                    </div>
                  </div>
                  {/* <div className='row bg-primary align-self-end'>
                    <div className='col text-center bg-danger'>
                      Total
                    </div>
                  </div> */}
                  {/* Total: {user.questions.length + Object.keys(user.answers).length} */}
                </div>
              </div>
            )
          })}
        {/* // </ul> */}
      </Fragment>
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
