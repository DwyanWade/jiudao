import React, { Component } from 'react'
import Header from '../../common/header'

class Detail extends Component {
  render(){
    return (
      <div>
        <Header title='详情' goBack={true}/>
      </div>
    )
  }
  componentDidMount(){
    //console.log(this.props.match.params.id)
  }
}

export default Detail