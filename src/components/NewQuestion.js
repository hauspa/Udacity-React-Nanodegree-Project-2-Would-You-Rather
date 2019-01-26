import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {

  state = {
    inputOne: '',
    inputTwo: '',
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
    // TODO: dispatch to adding the question to questions object
    // TODO: before adding, gotta get timestamp and get API from _DATA.js
    e.preventDefault()

    console.log('Input One: ', this.state.inputOne)
    console.log('Input Two: ', this.state.inputTwo)
  }

  render() {
    return(
      // TODO: form, maybe with 'or' in between
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
            <div className='col text-center' style={{ fontSize: 50 + 'px' }}>
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

        {/* <form>
          <div className="row">
            <div className="col-5">
              <input type="text" className="form-control" placeholder="First option" />
            </div>
            <div className='col-2'>
              or
            </div>
            <div className="col-5">
              <input type="text" className="form-control" placeholder="Second option" />
            </div>
          </div>
        </form> */}
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
