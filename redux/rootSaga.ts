import { takeLatest } from 'redux-saga/effects';
import { MATCH_ACTION,MATCH_DETAIL_ACTION } from './constants/match';
import { CLUB_ACTION,SQUAD_ACTION,FIXTURES_ACTION,TRANSFER_ACTION } from './constants/club';
import { LEAGUE_ACTION,LEAGUE_DETAIL_ACTION,TRANSFER_LEAGUE_ACTION,MATCHES_LEAGUE_ACTION,STATS_LEAGUE_ACTION} from './constants/league';
import { SEARCH_ACTION} from './constants/search';
import { PLAYER_ACTION} from './constants/player';
import { _matchSaga,_matchDetailSaga } from './saga/match';
import { _clubSaga,_squadSaga ,_fixturesSaga,_transfersSaga} from './saga/club';
import {_leagueSaga,_leagueDetailSaga,_transfersLeagueSaga,_matchesLeagueSaga,_statsLeagueSaga} from './saga/league'
import {_searchSaga} from './saga/search'
import {_playerSaga} from './saga/player'

export function* rootSaga() {
    yield takeLatest(MATCH_ACTION, _matchSaga); 
    yield takeLatest(MATCH_DETAIL_ACTION, _matchDetailSaga); 
    yield takeLatest(CLUB_ACTION, _clubSaga); 
    yield takeLatest(SQUAD_ACTION, _squadSaga); 
    yield takeLatest(FIXTURES_ACTION, _fixturesSaga); 
    yield takeLatest(TRANSFER_ACTION, _transfersSaga); 
    yield takeLatest(LEAGUE_ACTION, _leagueSaga); 
    yield takeLatest(LEAGUE_DETAIL_ACTION, _leagueDetailSaga); 
    yield takeLatest(TRANSFER_LEAGUE_ACTION, _transfersLeagueSaga); 
    yield takeLatest(MATCHES_LEAGUE_ACTION, _matchesLeagueSaga); 
    yield takeLatest(STATS_LEAGUE_ACTION, _statsLeagueSaga); 
    yield takeLatest(SEARCH_ACTION, _searchSaga); 
    yield takeLatest(PLAYER_ACTION, _playerSaga); 
    
}