import React, { Component } from 'react'
import { MainImgWrapper } from '../style'
import { connect } from 'react-redux'
import playImgBtn from '../../../static/play.png'
import unplayImgBtn from '../../../static/unplay.png'
import { actionCreators } from '../store'

class MainImg extends Component {
  render(){
    let { 
      image, 
      type, 
      index, 
      url, 
      playMusic,
      currentPlayIndex, 
      playMusicHandle,
      musicIndex 
    } = this.props
    return (
      <MainImgWrapper>
        <img id='mainImg' className={type===200?'musicImg':''} src={ image } alt=''/>
        {this.isMusicType(type, playMusic, index, currentPlayIndex, musicIndex, url, playMusicHandle)}
      </MainImgWrapper>
    )
  }
  isMusicType(type, playMusic, index, currentPlayIndex, musicIndex, url, playMusicHandle){
    if(type === 200){
      return (
        <img 
          className='playMusicBtn' 
          onClick={() => playMusicHandle(index, currentPlayIndex, musicIndex, url)} 
          src={playMusic ? playImgBtn : unplayImgBtn} 
          alt=''
        />
      )
    }
  }
}

const mapState = (state) => ({
  image: state.getIn(['journal', 'content', 'image']),
  type: state.getIn(['journal', 'content', 'type']),
  index: state.getIn(['journal', 'content', 'index']),
  url: state.getIn(['journal', 'content', 'url']),
  playMusic: state.getIn(['journal', 'playMusic']),
  currentPlayIndex: state.getIn(['journal', 'currentPlayIndex']),
  musicIndex: state.getIn(['journal', 'musicIndex'])
})

const mapDispatch = (dispatch) => ({
  playMusicHandle(index, currentPlayIndex, musicIndex, url){
    let audio = document.getElementById('myAudio')
    if(audio !== null){
      let audio = document.getElementById('myAudio')
      if(audio.paused){
        //这里应该判断是继续播放还是重开新的一首歌
        if(currentPlayIndex === index){
          //没切换，是在当前暂停之后继续
          audio.play()
        }else{
          //切换了页面
          if((musicIndex === index) && (musicIndex === currentPlayIndex)){
            audio.play()
          }else{
            if(musicIndex === index){
              audio.play()
            }else{
              //重开,软切
              audio.src = url
              audio.play()
              dispatch(actionCreators.lockCurrentMusic(index))
            }
          }
        }
      }else{
        //这里应该判断是暂停播放还是重开新的一首歌
        if(currentPlayIndex === index){
          //暂停
          audio.pause()
        }else{
          //重开,硬切
          if(musicIndex === index){
            audio.pause()
          }else{
            audio.src = url
            audio.play()
            dispatch(actionCreators.lockCurrentMusic(index))
          }
        }
      }
    }else{
      //第一次创建音乐标签
      let audio = document.createElement('audio')
      audio.id = 'myAudio'
      audio.src = url
      audio.play()
      document.body.append(audio)
      dispatch(actionCreators.lockCurrentMusic(index))
      audio.addEventListener('ended', () => {
        document.body.removeChild(audio)
        dispatch(actionCreators.initPlayMusic())
      })
    }
    dispatch(actionCreators.changeMusic(index))
  }
})

export default connect(mapState, mapDispatch)(MainImg)