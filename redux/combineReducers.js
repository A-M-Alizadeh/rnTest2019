import {combineReducers} from 'redux'
import {tokenReducer,loggedInModelReducer,AutoCompleteCitiesReducer,HomeHorizontalWorkProductReducer,HomeHorizontalSpecialProductReducer,HomeHorizontalDepartmentReducer,commonDataReducer} from './login/index'
import rehidrated from './login/rehidrateReducer'

export default combineReducers({
    rehidrated,
    tokenReducer,
    loggedInModelReducer,
    commonDataReducer,
    HomeHorizontalDepartmentReducer,
    HomeHorizontalSpecialProductReducer,
    HomeHorizontalWorkProductReducer,
    AutoCompleteCitiesReducer
})

