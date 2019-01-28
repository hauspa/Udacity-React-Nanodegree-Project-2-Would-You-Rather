import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleNewQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {

  state = {
    inputOne: '',
    inputTwo: '',
    qid: ''
  }

  handleChange = (e) => {
    let targetValue = e.target.value
    let inputNumber = e.target.id

    this.setState((prevState) => ({
      ...prevState,
      [inputNumber]: targetValue
    }))
  }

  handleClick = (e) => {
    e.preventDefault()

    // save as variables, so can read by object destructuring
    let optionOneText = this.state.inputOne
    let optionTwoText = this.state.inputTwo
    this.props.dispatch(handleNewQuestion(optionOneText, optionTwoText))
      .then((qid) => {
        this.setState((prevState) => ({
          ...prevState,
          qid: qid
        }))
      })
  }

  render() {

    if(this.state.qid !== '') {
      // return <Redirect to={`/questions/${this.state.qid}`} /> // after finishing adding the poll/question, go that specific question page!
      return <Redirect to={`/`} /> // go to Home
    }

    return(

      // TODO: if one of the fields is empty, then show that input in red or make button disabled!
      <div>
        <br></br>
        <h3 className='text-center'>Add a new question</h3>

        <br></br>

        <h4 className='text-center'>Would You Rather...</h4>

        <br></br>

        <form>
          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="inputOne">First option</label>
              <input type="text" className="form-control" id="inputOne" placeholder="First option" value={this.state.inputOne} onChange={this.handleChange} />
            </div>
          </div>

          <br></br>

          <div className='row'>
            <div className='col text-center'>
              or
            </div>
          </div>

          <br></br>

          <div className="form-group">
            <label htmlFor="inputTwo">Second option</label>
            <input type="text" className="form-control" id="inputTwo" placeholder="Second option" value={this.state.inputTwo} onChange={this.handleChange} />
          </div>

          <br></br>

          <div className='row'>
            <button type="submit" className="btn btn-primary btn-lg mx-auto" disabled={ this.state.inputOne === '' || this.state.inputTwo === '' } onClick={this.handleClick}>Add question</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
