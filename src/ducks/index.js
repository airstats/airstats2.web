import { combineReducers } from 'redux-immutable'
import general from './general'
import recent from './recent'

const app = combineReducers({
  general,
  recent
})

export default app
