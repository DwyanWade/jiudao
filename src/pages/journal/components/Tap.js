import React, { Component } from 'react'
import { TapWrapper } from '../style'
import likeImg from '../../../static/like.png'
import unlikeImg from '../../../static/unlike.png'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class Tap extends Component {
  render() {
    let { likeCount, likeStatus, journal, tap } = this.props
    return (
      <TapWrapper onClick={() => tap(journal, likeCount, likeStatus) }>
        {this.getLikeStatus(likeStatus)}
        <span>{likeCount}</span>
      </TapWrapper>
    )
  }
  getLikeStatus(likeStatus){
    if(likeStatus){
      return <img src={likeImg} alt=''/>
    }else{
      return <img src={unlikeImg} alt=''/>
    }
  }
}

const mapState = (state) => ({
  likeCount: state.getIn(['journal', 'likeCount']),
  likeStatus: state.getIn(['journal', 'likeStatus']),
  journal: state.getIn(['journal', 'content'])
})

const mapDispatch = (dispatch) => ({
  tap(journal, likeCount, likeStatus){
    dispatch(actionCreators.changeTap(journal, likeCount, likeStatus))
  }
})

export default connect(mapState, mapDispatch)(Tap)