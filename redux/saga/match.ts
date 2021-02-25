import { takeLatest, put, all, select } from "redux-saga/effects";
import {
  MATCH_ACTION,
} from "../constants/match";
import {

  matchComplete,
  matchDetailComplete
} from "../action/match";
import {fetchGet} from '../../connection'

// match
export function* _matchSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/matches', action.payload)
    yield put(matchComplete(res))
    
  } catch (e) {
    yield put(matchComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}

export function* _matchDetailSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/matchDetails', action.payload)
    yield put(matchDetailComplete(res))
    
  } catch (e) {
    yield put(matchDetailComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}




