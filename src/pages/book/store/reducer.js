import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  list: []
})

export default (state=defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST:
      return state.set('list', action.res)
    default:
      return state
  }
}