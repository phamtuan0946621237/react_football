import { takeLatest, put, all, select } from "redux-saga/effects";
import {
  MATCH_ACTION,
} from "../constants/match";
import {
  matchComplete,
} from "../action/match";
import {fetchGet} from '../../connection'

// đăng nhập
export function* _matchSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/matches', action.payload)
    yield put(matchComplete(res))
    
  } catch (e) {
    yield put(matchComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}




