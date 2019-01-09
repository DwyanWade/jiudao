import React, { Component } from 'react'
import Left from './Left'
import Tap from './Tap'
import {
  JournalTopWrapper
} from '../style'

class JournalTop extends Component {
  render() {
    return (
      <JournalTopWrapper>
        <Left />
        <Tap />
      </JournalTopWrapper>
    )
  }
}

export default JournalTop