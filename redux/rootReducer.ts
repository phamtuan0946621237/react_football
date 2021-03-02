 

import {combineReducers} from 'redux'
import { StateType } from 'typesafe-actions'
import matchReducers from './reducers/match' 
import clubReducers from './reducers/club' 
import leagueReducers from './reducers/league' 
const rootReducers = combineReducers({
    match : matchReducers,
    club : clubReducers,
    league : leagueReducers

})

export default rootReducers;

export type RootState = StateType<typeof rootReducers>