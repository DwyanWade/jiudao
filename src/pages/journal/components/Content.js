import React, { Component } from 'react'
import { ContentWrapper } from '../style'
import { connect } from 'react-redux'

class Content extends Component {
  render() {
    const { content } = this.props
    return (
      <ContentWrapper>
        {content}
      </ContentWrapper>
    )
  }
}

const mapState = (state) => ({
  content: state.getIn(['journal', 'content', 'content'])
})

export default connect(mapState, null)(Content)