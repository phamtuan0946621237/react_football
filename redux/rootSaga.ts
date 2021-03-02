import { takeLatest } from 'redux-saga/effects';
import { MATCH_ACTION,MATCH_DETAIL_ACTION } from './constants/match';
import { CLUB_ACTION,SQUAD_ACTION,FIXTURES_ACTION,TRANSFER_ACTION } from './constants/club';
import { LEAGUE_ACTION} from './constants/league';
import { _matchSaga,_matchDetailSaga } from './saga/match';
import { _clubSaga,_squadSaga ,_fixturesSaga,_transfersSaga} from './saga/club';
import {_leagueSaga} from './saga/league'
// import { GET_REGISTER } from './Register/constans';
// import {GET_PRODUCTION} from './Production/constans'
// import { sagaGetRegister } from './Register/saga/sagaGetLogin';
// import {sagaListProduction} from './Production/saga/sagaGetListProduction'
// import {sagaDetailProduction} from './DetailProduction/saga/sagaGetDetailProduction'
// import {GET_DETAIL_PRODUCTION} from './DetailProduction/constans'
export function* rootSaga() {
    yield takeLatest(MATCH_ACTION, _matchSaga); 
    yield takeLatest(MATCH_DETAIL_ACTION, _matchDetailSaga); 
    yield takeLatest(CLUB_ACTION, _clubSaga); 
    yield takeLatest(SQUAD_ACTION, _squadSaga); 
    yield takeLatest(FIXTURES_ACTION, _fixturesSaga); 
    yield takeLatest(TRANSFER_ACTION, _transfersSaga); 
    yield takeLatest(LEAGUE_ACTION, _leagueSaga); 
}