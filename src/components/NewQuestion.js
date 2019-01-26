import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {

  handleCreate = () => {
    // TODO: dispatch to adding the question to questions object
    // TODO: before adding, gotta get timestamp and get API from _DATA.js
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
          <div class="form-row">
            <div class="form-group col">
              <label for="inputOptionOne">First option</label>
              <input type="text" class="form-control" id="inputOptionOne" placeholder="First option" />
            </div>
          </div>

          <br></br>

          <div className='row'>
            <div className='col text-center' style={{ fontSize: 50 + 'px' }}>
              or
            </div>
          </div>

          <br></br>

          <div class="form-group">
            <label for="inputOptionTwo">Second option</label>
            <input type="text" class="form-control" id="inputOptionTwo" placeholder="Second option" />
          </div>

          <br></br>

          <div className='row'>
            <button type="submit" class="btn btn-primary btn-lg mx-auto">Add question</button>
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
