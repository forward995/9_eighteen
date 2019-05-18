import { combineReducers } from 'redux'

import { authentication } from './authentication.reducers'
import { registration } from './registration.reducers'
import { course } from './course.reducers'
import { category } from './category.reducers'
import { subCategory } from './subCategory.reducers'
import { item } from './item.reducers'
import { plan } from './plan.reducers'

const rootReducer = combineReducers({
    authentication,
    registration,
    course,
    category,
    subCategory,
    item,
    plan
})

export default rootReducer;