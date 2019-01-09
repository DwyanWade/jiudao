import { combineReducers } from 'redux-immutable'
import { reducer as journalReducer } from '../pages/journal/store'
import { reducer as footerReducer } from '../common/footer/store'
import { reducer as bookReducer } from '../pages/book/store'

const reducer = combineReducers({
  journal: journalReducer,
  footer: footerReducer,
  book: bookReducer
});

export default reducer;