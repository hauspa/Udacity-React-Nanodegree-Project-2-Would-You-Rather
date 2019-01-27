import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorPage extends Component {
  render(){
    return(
      <div>
        <h1 className='text-center'>404</h1>
        <h3 className='text-center'>Sorry, there must have been some mistake!</h3>
        <br></br>
        <br></br>
        <div className='row'>
          <Link to='/' className='mx-auto'><button type='button' className='btn btn-lg bg-primary'>Go back to Home</button></Link>
        </div>
      </div>
    )
  }
}

// TODO: make URL in search bar to /404!!! => but by using history.push here, it might create an infinite loop

export default ErrorPage
