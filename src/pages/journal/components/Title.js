import React, { Component } from 'react'
import { TitleWrapper } from '../style'
import prevImg from '../../../static/prev.png'
import nextImg from '../../../static/next.png'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { showToast } from '../../../utils/util'

class Title extends Component {
  render() {
    let { 
      title, index, getPrevJournal, getNextJournal, 
      lastIndex, currentIndex 
    } = this.props
    return (
      <TitleWrapper>
        <div className='tapBtn' onClick={() => getPrevJournal(index, currentIndex)}>
          <img src={prevImg} alt=''/>
        </div>
        <span>{title}</span>
        <div className='tapBtn' onClick={() => getNextJournal(index, lastIndex)}>
          <img src={nextImg} alt=''/>
        </div>
      </TitleWrapper> 
    )
  }
}

const mapState = (state) => ({
  title: state.getIn(['journal', 'content', 'title']),
  index: state.getIn(['journal', 'content', 'index']),
  lastIndex: state.getIn(['journal', 'lastIndex']),
  currentIndex: state.getIn(['journal', 'currentIndex'])
})

const mapDispatch = (dispatch) => {
  return {
    getPrevJournal(index, currentIndex){
      if(currentIndex === 1){
        showToast('没有期刊了', 3000)
        return
      }
      dispatch(actionCreators.getPrevInfo(index))
    },
    getNextJournal(index, lastIndex){
      if(index === lastIndex){
        showToast('这最新期刊了', 3000)
        return
      }
      dispatch(actionCreators.getNextInfo(index))
    }
  }
}

export default connect(mapState, mapDispatch)(Title)