import http from '../../../utils/http'
import TapModel from '../../../model/tap'
import * as actionTypes from './actionTypes'
import { 
  dateHandle, 
  setStorageHandle, 
  getStorageHandle, 
} from '../../../utils/util'

const dispatchTapInfo = (dispatch, journal) => {
  let tap = new TapModel(journal)
  tap.getLikeInfo().then(res => {
    dispatch(changeTapInfo(res.fav_nums, res.like_status))
  })
}

const updateLikeStatus = (journal, type) => {
  let tap = new TapModel(journal)
  if(type === 'like'){
    tap.like().then(res => {})
  }else{
    tap.cancelLike().then(res => {})
  }
}

const changeTapInfo = (likeCount, likeStatus) => ({
  type: actionTypes.CHANGE_TAP_INFO,
  likeCount: likeCount,
  likeStatus: likeStatus
})

const getLastInfo = (res) => ({
  type: actionTypes.GET_LAST_JOURNAL,
  content: res
})

const changeInfo = (res) => ({
  type: actionTypes.GET_PREVORNEXT_JOURNAL,
  content: res
})

export const getLastJournal = () => {
  return (dispatch) => {
    http.get('classic/latest').then(res => {
      dateHandle(res)
      dispatch(getLastInfo(res))
      setStorageHandle(`journal${res.index}`, res)
    })
  }
}

export const getJournalFromCache = () => {
  return (dispatch) => {
    let content = getStorageHandle('leaveContent')
    dispatch({
      type: actionTypes.LEAVE_JOURNAL,
      leaveContent: content
    })
  }
}

export const getPrevInfo = (index) => {
  return (dispatch) => {
    let storageIndex = index - 1
    let journal = getStorageHandle(`journal${storageIndex}`)
    if(journal){
      dispatch(changeInfo(journal))
      dispatchTapInfo(dispatch, journal)
    }else{
      let url = `classic/${index}/previous`
      http.get(url).then(res => {
        dateHandle(res)
        setStorageHandle(`journal${res.index}`, res)
        dispatch(changeInfo(res))
        dispatchTapInfo(dispatch, res)
    })
   }
  }
}

export const getNextInfo = (index) => {
  return (dispatch) => {
    let storageIndex = index + 1
    let journal = getStorageHandle(`journal${storageIndex}`)
    if(journal){
      dispatch(changeInfo(journal))
      dispatchTapInfo(dispatch, journal)
    }else{
      let url = `classic/${index}/next`
      http.get(url).then(res => {
        dateHandle(res)
        setStorageHandle(`journal${res.index}`, res)
        dispatch(changeInfo(res))
        dispatchTapInfo(dispatch, res)
    })
    }
  }
}

export const changeTap = (journal, likeCount, likeStatus) => {
  return (dispatch) => {
    if(likeStatus){
      likeCount = likeCount - 1
      dispatch(changeTapInfo(likeCount, 0))
      updateLikeStatus(journal, 'cancel')
    }else{
      likeCount = likeCount + 1
      dispatch(changeTapInfo(likeCount, 1))
      updateLikeStatus(journal, 'like')
    }
  }
}

export const changeMusic = (index) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.PLAY_OR_STOP_MUSIC,
      index,
    })
  }
}

export const lockCurrentMusic = (index) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOAC_CURRENT_MUSIC,
      index,
    })
  }
}

export const initPlayMusic = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.MUSIC_OVER
    })
  }
}
