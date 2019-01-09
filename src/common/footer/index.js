import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { FooterWrapper } from './style'
import classicImg from '../../static/classic.png'
import activeClassicImg from '../../static/classic@highlight.png'
import bookImg from '../../static/book.png'
import activeBookImg from '../../static/book@highlight.png'
import myImg from '../../static/my.png'
import activeMyImg from '../../static/my@highlight.png'

class Footer extends Component {
  render(){
    const { path, selectPath } = this.props 
    return (
      <FooterWrapper>
        <Link to={'/'}>
          <div onClick={() => selectPath('home')}>
            <img src={path === 'home' ? activeClassicImg : classicImg} alt=""/>
            <span className={path === 'home' ? 'activeTxt' : ''}>流行</span>
          </div>
        </Link>
        <Link to={'/book'}>
          <div onClick={() => selectPath('book')}>
            <img src={path === 'book' ? activeBookImg : bookImg} alt=""/>
            <span className={path === 'book' ? 'activeTxt' : ''}>书单</span>
          </div>
        </Link>
        <Link to={'/my'}>
          <div onClick={() => selectPath('my')}>
            <img src={path === 'my' ? activeMyImg : myImg} alt=""/>
            <span className={path === 'my' ? 'activeTxt' : ''}>喜欢</span>
          </div>
        </Link>
      </FooterWrapper>
    )
  }
}

const mapState = (state) => ({
  path: state.getIn(['footer', 'path'])
})

const mapDispatch = (dispatch) => ({
  selectPath(path){
    dispatch(actionCreators.changePath(path))
  }
})

export default connect(mapState, mapDispatch)(Footer)