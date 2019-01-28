import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {

  render() {
    let { authedUser, users } = this.props

    let sortedUsers = Object.values(users).sort((a,b) => (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length))
    let leaderIndex = 0 // because ordered list doesn't work with Bootstrap

    return(
      <div>
        <br></br>
        <br></br>
        <h1 className='text-center'>Leaderboard</h1>
        <br></br>
        <div className='mx-auto' style={{ maxWidth: 1000 + 'px' }}>
          {sortedUsers.map((user) => {
            leaderIndex++ // because ordered list doesn't work with Bootstrap
            return (
              <div key={user.id} className={'leaderboard row mb-2 rounded border ' + (authedUser.id === user.id ? 'border-success' : 'border-dark')}>
                <div className='col-1 bg-dark'>
                  <div className='row h-100 align-items-center'>
                    <div className='col text-center index'>
                      {leaderIndex}.
                    </div>
                  </div>
                </div>
                <div className='col bg-dark'>
                  <div className='name row h-100 align-items-center justify-content-start'>
                    <img src={window.location.origin + user.avatarURL} alt={user.name} width="60" height="60" className='rounded mr-3' />
                    {user.name}
                  </div>
                </div>
                <div className='col bg-dark'>
                  <div className='row d-flex flex-column h-100 text-center'>
                    <div className='number pt-1 d-flex flex-row align-items-center justify-content-center'>
                      {user.questions.length}
                    </div>
                    <div className='pb-2'>
                      Questions
                    </div>
                  </div>
                </div>
                <div className='col bg-dark'>
                  <div className='row d-flex flex-column h-100 text-center'>
                    <div className='number pt-1 d-flex flex-row align-items-center justify-content-center'>
                      {Object.keys(user.answers).length}
                    </div>
                    <div className='pb-2'>
                      Answers
                    </div>
                  </div>
                </div>
                <div className='col bg-dark'>
                  <div className='row d-flex flex-column h-100 text-center'>
                    <div className='number pt-1 d-flex flex-row align-items-center justify-content-center'>
                      {user.questions.length + Object.keys(user.answers).length}
                    </div>
                    <div className='pb-2'>
                      Total
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      </div>
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
