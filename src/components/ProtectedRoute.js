import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    1 > 2
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

export default ProtectedRoute





// class ProtectedRoute extends Component {
//
//
//   render() {
//     return(
//       <div>
//         Protected Route
//         <Route {...rest} render={ props => (
//           this.props.loggedIn === true
//             ? <Component {...props} />
//             : <Redirect to='/login' />
//         )} />
//       </div>
//     )
//   }
// }
//
// function mapStateToProps({ authedUser }, { component: Component, ...rest }) {
//   return {
//     component: Component,
//     loggedIn: authedUser !== null,
//   }
// }
//
// export default connect(mapStateToProps)(ProtectedRoute)
