import React, { Component } from 'react'
import PropTypes from 'prop-types'
import creatHistory from 'history/createBrowserHistory' 
import {
  HeaderWrapper,
  Back,
  Title
} from './style'

class Header extends Component {
  render(){
    return (
      <HeaderWrapper>
        {this.showBackBtn()}
        <Title>
         {this.props.title}
        </Title>
      </HeaderWrapper>
    )
  }
  showBackBtn(){
    if(this.props.goBack){
      return (
        <Back onClick={this.goPrev.bind(this)}/>
      )
    }
  }
  goPrev(){
    const history = creatHistory()
    history.goBack()
  }
}

Header.propTypes = {
  goBack: PropTypes.bool
}

Header.defaultProps = {
  goBack: false
}

export default Header