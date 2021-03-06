import React from 'react'
import VoteCardUnanswered from './VoteCardUnanswered'

const QuestionUnanswered = (props) => {
  return (
    <div className='row'>
      <VoteCardUnanswered option={'optionOne'} />
      <div className='col-lg-2 text-center align-self-center or'>
        or
      </div>
      <VoteCardUnanswered option={'optionTwo'} />
    </div>
  )
}

export default QuestionUnanswered
