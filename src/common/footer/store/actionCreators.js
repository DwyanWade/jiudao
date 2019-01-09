import * as actionTypes from './actionTypes'

export const changePath = (path) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.SELECT_PATH,
      path: path
    })
  }
}