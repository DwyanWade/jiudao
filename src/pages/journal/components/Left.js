import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LeftWrapper } from '../style'

class Left extends Component {
  render() {
    const { index, year, month } = this.props
    return (
      <LeftWrapper>
        <p className='index'>
          <span className='num'>No.</span>
          <span className='number'>{index}</span>
        </p>
        <p className='date'>
          <span>{month}</span>
          <span>{year}</span>
        </p>
      </LeftWrapper>
    )
  }
}

const mapState = (state) => ({
  index: state.getIn(['journal', 'content', 'index']),
  month: state.getIn(['journal', 'content', 'month']),
  year: state.getIn(['journal', 'content', 'year'])
})

export default connect(mapState, null)(Left)