import { combineReducers } from 'redux'

import { authentication } from './authentication.reducers'
import { registration } from './registration.reducers'
import { course } from './course.reducers'
import { category } from './category.reducers'

const rootReducer = combineReducers({
    authentication,
    registration,
    course,
    category
})

export default rootReducer;