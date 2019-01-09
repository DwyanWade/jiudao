import React, { Component } from 'react'
import Header from '../../common/header'
import Footer from '../../common/footer'

class My extends Component {
  render() {
    return (
      <div>
        <Header title='我的' />
        <Footer />
      </div>
    )
  }
}

export default My;