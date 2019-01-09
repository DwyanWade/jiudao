import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  path: 'home'
})

export default (state = defaultState, action) => {
  switch(action.type){
    case actionTypes.SELECT_PATH:
      return state.set('path', action.path)
    default:
      return state
  }
}