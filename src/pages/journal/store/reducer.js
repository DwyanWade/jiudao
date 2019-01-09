import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
import { transition } from '../../../utils/util'

const defaultState = fromJS({
  content: null,
  lastIndex: 0,
  currentIndex: 0,
  likeStatus: 0,
  likeCount: 0,
  playMusic: false,
  musicIndex: 0,
  currentPlayIndex: 0
})

export default (state=defaultState, action) => {
  switch(action.type){
    case actionTypes.GET_LAST_JOURNAL:
      return state.merge({
        'content': action.content,
        'lastIndex': action.content.index,
        'currentIndex': action.content.index,
        'likeCount': action.content.fav_nums,
        'likeStatus': action.content.like_status
      })
    case actionTypes.LEAVE_JOURNAL:
      return state.set('content', action.leaveContent)
    case actionTypes.GET_PREVORNEXT_JOURNAL:
      transition('mainImg')  //传入图片id
      return state.merge({
        'content': action.content,
        'currentIndex': action.content.index,
        'playMusic': action.content.index === state.get('musicIndex'),
        'currentPlayIndex': 0
      })
    case actionTypes.CHANGE_TAP_INFO:
      return state.merge({
        'likeStatus': action.likeStatus,
        'likeCount': action.likeCount
      })
    case actionTypes.PLAY_OR_STOP_MUSIC:
      let playMusic = state.get('playMusic')
      return state.merge({
        'playMusic': !state.get('playMusic'),
        'musicIndex': playMusic ? 0 : action.index
      })
    case actionTypes.LOAC_CURRENT_MUSIC:
      return state.set('currentPlayIndex', action.index)
    case actionTypes.MUSIC_OVER:
      return state.merge({
        'playMusic': false,
        'musicIndex': 0
      })
    default:
      return state
  }
}