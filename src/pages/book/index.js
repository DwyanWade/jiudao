import React, { Component } from 'react'
import Header from '../../common/header'
import Footer from '../../common/footer'
import Search from './components/Search'
import List from './components/List'
import { setStorageHandle, getStorageHandle } from '../../utils/util'

class Book extends Component {
  constructor(props){
    super(props)
    this.state = {
      scrollTop: 0
    }
    this.bindScroll = this.bindScroll.bind(this);
  }
  render(){
    return (
      <div>
        <Header title='书籍' />
          <Search />
          <List />
        <Footer />
      </div>
    )
  }
  componentDidMount(){
    let scrollTop = getStorageHandle('scrollTop')
    document.documentElement.scrollTop = scrollTop
    window.addEventListener('scroll', this.bindScroll)
  }
  componentWillUnmount(){
    setStorageHandle('scrollTop', this.state.scrollTop)
    window.removeEventListener('scroll', this.bindScroll)
  }
  bindScroll(){
    let scrollTop = document.documentElement.scrollTop
    this.setState(() => ({
      scrollTop: scrollTop
    }))
  }
}

export default Book