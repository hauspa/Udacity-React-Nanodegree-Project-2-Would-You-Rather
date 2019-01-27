import React, { Component } from 'react'

class ErrorPage extends Component {
  render(){
    return(
      <div>
        <h1 className='text-center'>Sorry, can't find the website!</h1>
        <br></br>
        <br></br>
        <div className='row'>
          <a className='mx-auto'><button type='button' className='btn btn-lg bg-primary'>Go back to Home</button></a>
        </div>
      </div>
    )
  }
}

export default ErrorPage
