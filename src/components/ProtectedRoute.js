import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    console.log('loggedin dude?', rest)
    return (
      // TODO: gotta find out a way to see here whether user is logged in or not!
      props.isLoggedIn === true
        // ? <Component {...props} />
        // : <Redirect to='/login' />
        ? <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        : <Component {...props} />
    )
  }} />
)

export default ProtectedRoute
