import { takeLatest, put, all, select } from "redux-saga/effects";
import {
  leagueComplete
} from "../action/league";
import {fetchGet,POST} from '../../connection'

// club
export function* _leagueSaga(action: any) {

  try {
    let res = yield POST('https://www.fotmob.com/allLeagues', action.payload)
    yield put(leagueComplete(res))
  } catch (e) {
    yield put(leagueComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}




