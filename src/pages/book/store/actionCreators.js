import * as actionTypes from './actionTypes'
import http from '../../../utils/http'
import { setStorageHandle, getStorageHandle } from '../../../utils/util'

export const getList = () => {
  return (dispatch) => {
    let bookList = getStorageHandle('bookList')
    if(bookList){
      dispatch({
        type: actionTypes.GET_LIST,
        res: bookList
      })
    }else{
      let url = `book/hot_list`
      http.get(url).then(res => {
        res.splice(4, 1)
        dispatch({
          type: actionTypes.GET_LIST,
          res,
        })
        setStorageHandle('bookList', res)
      })
    }
  }
}