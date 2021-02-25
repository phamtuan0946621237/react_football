import { takeLatest } from 'redux-saga/effects';
import { MATCH_ACTION,MATCH_DETAIL_ACTION } from './constants/match';
import { _matchSaga,_matchDetailSaga } from './saga/match';
// import { GET_REGISTER } from './Register/constans';
// import {GET_PRODUCTION} from './Production/constans'
// import { sagaGetRegister } from './Register/saga/sagaGetLogin';
// import {sagaListProduction} from './Production/saga/sagaGetListProduction'
// import {sagaDetailProduction} from './DetailProduction/saga/sagaGetDetailProduction'
// import {GET_DETAIL_PRODUCTION} from './DetailProduction/constans'
export function* rootSaga() {
    yield takeLatest(MATCH_ACTION, _matchSaga); 
    yield takeLatest(MATCH_DETAIL_ACTION, _matchDetailSaga); 
    
}