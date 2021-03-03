 

import {combineReducers} from 'redux'
import { StateType } from 'typesafe-actions'
import matchReducers from './reducers/match' 
import clubReducers from './reducers/club' 
import leagueReducers from './reducers/league' 
import searchReducers from './reducers/search' 
import playerReducers from './reducers/player' 
const rootReducers = combineReducers({
    match : matchReducers,
    club : clubReducers,
    league : leagueReducers,
    search : searchReducers,
    player : playerReducers

})

export default rootReducers;

export type RootState = StateType<typeof rootReducers>