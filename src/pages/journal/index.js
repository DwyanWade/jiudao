import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../common/header'
import Footer from '../../common/footer'
import JournalTop from './components/JournalTop'
import MainImg from './components/MainImg'
import Type from './components/Type'
import Content from './components/Content'
import Title from './components/Title'
import { actionCreators } from './store'
import { setStorageHandle, getStorageHandle } from '../../utils/util'

class Journal extends Component {

  render() {
    return (
      <div>
        <Header title='首页'/>
        <JournalTop />
        <MainImg />
        <Type />
        <Content />
        <Title />
        <Footer />
      </div>
    )
  }

  componentDidMount(){
    this.props.getJournal()
  }

  componentWillUnmount(){
    setStorageHandle('leaveContent', this.props.leaveContent)
  }
}

const mapState = (state) => ({
  leaveContent: state.getIn(['journal', 'content'])
})

const mapDispatch = (dispatch) => ({
  getJournal(){
    let content = getStorageHandle('leaveContent')
    if(content !== null){
      dispatch(actionCreators.getJournalFromCache())
    }else{
      dispatch(actionCreators.getLastJournal())
    }
  }
})

export default connect(mapState, mapDispatch)(Journal)