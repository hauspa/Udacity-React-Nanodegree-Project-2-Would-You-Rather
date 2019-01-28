import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {



  render() {

    let { authedUser, users } = this.props

    let sortedUsers = Object.values(users).sort((a,b) => (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length))
    console.log('Users: ', sortedUsers)

    let leaderIndex = 0 // because ordered list doesn't work with Bootstrap

    return(
      <div>
        <h3>Leaderboard</h3>
        {/* <ul className='list-group'> */}
        <Fragment>
          {sortedUsers.map((user) => {
            leaderIndex++ // because ordered list doesn't work with Bootstrap
            return (
              // <li key={user.id} className={ 'list-group-item mb-1 ' + (authedUser.id === user.id ? 'border border-success' : '') }>
              //    {leaderIndex}) {user.name}: {user.questions.length + Object.keys(user.answers).length}
              // </li>
              // TODO: AuthedUser highlighted by color border!
              <div key={user.id} className={'row mb-2 rounded border ' + (authedUser.id === user.id ? 'border-success' : 'border-light')}>
                <div className='col-1 bg-primary text-center p-5'>
                  {leaderIndex}
                </div>
                <div className='col bg-success'>
                  <div className='row bg-warning h-100 align-items-center justify-content-center'>
                    <img src={window.location.origin + user.avatarURL} alt={user.name} width="50" height="50" className='rounded mr-2' />
                    {user.name}
                  </div>
                </div>
                <div className='col bg-info'>
                  <div className='row d-flex flex-column bg-warning h-100 text-center'>
                    <div className='bg-success flex-fill d-flex flex-row align-items-center justify-content-center'>
                      {user.questions.length}
                    </div>
                    <div className='bg-danger '>
                      Questions
                    </div>
                  </div>
                </div>
                <div className='col bg-warning'>
                  <div className='row d-flex flex-column bg-warning h-100 text-center'>
                    <div className='bg-success flex-fill d-flex flex-row align-items-center justify-content-center'>
                      {Object.keys(user.answers).length}
                    </div>
                    <div className='bg-danger '>
                      Answers
                    </div>
                  </div>
                </div>
                <div className='col bg-info'>
                  <div className='row d-flex flex-column bg-warning h-100 text-center'>
                    <div className='bg-primary flex-fill d-flex flex-row align-items-center justify-content-center'>
                      {user.questions.length + Object.keys(user.answers).length}
                    </div>
                    <div className='bg-danger '>
                      Total
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        {/* // </ul> */}
      </Fragment>
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
