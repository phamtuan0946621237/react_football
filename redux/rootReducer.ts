 
import matchReducers from './reducers/match' 
import {combineReducers} from 'redux'
import { StateType } from 'typesafe-actions'
const rootReducers = combineReducers({
    match : matchReducers,
})

export default rootReducers;

export type RootState = StateType<typeof rootReducers>