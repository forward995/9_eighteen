import { combineReducers } from 'redux'

import { authentication } from './authentication.reducers'
import { registration } from './registration.reducers'

const rootReducer = combineReducers({
    authentication,
    registration
})

export default rootReducer;