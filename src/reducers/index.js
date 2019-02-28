import { combineReducers } from 'redux'

import { authentication } from './authentication.reducers'
import { registration } from './registration.reducers'
import { course } from './course.reducers'

const rootReducer = combineReducers({
    authentication,
    registration,
    course
})

export default rootReducer;