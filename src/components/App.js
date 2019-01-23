import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from '../logo.svg';
import '../App.css';
import { handleInitialData } from '../actions/shared'
import { addQuestion } from '../actions/questions'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
    // this.props.dispatch(addQuestion({
    //   "007blabla": {
    //     id: '007blabla',
    //     author: 'jamesbond',
    //     timestamp: 1467166872688,
    //     optionOne: {
    //       votes: ['jamesbond'],
    //       text: 'dude',
    //     },
    //     optionTwo: {
    //       votes: [],
    //       text: 'bro'
    //     }
    //   },
    // }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Dude</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default connect()(App)
