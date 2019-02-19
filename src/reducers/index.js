import { combineReducers } from 'redux'

import { authentication } from './authentication.reducers'

const rootReducer = combineReducers({
    authentication
})

export default rootReducer;