import React, { Component } from 'react'
import movieImg from '../../../static/movie.png'
import musicImg from '../../../static/music.png'
import poetryImg from '../../../static/poetry.png'
import { TypeImgWrapper } from '../style'
import { connect } from 'react-redux'

class Type extends Component {
  render() {
    let { type } = this.props
    return (
      <TypeImgWrapper>
        {this.whichType(type)}
      </TypeImgWrapper>
    )
  }
  whichType(type){
    if(type === 100){
      return <img src={movieImg} alt=''/>
    }else if(type === 200){
      return <img src={musicImg} alt=''/>
    }else{
      return <img src={poetryImg} alt=''/>
    }
  }
}

const mapState = (state) => ({
  type: state.getIn(['journal', 'content', 'type'])
})

export default connect(mapState, null)(Type)