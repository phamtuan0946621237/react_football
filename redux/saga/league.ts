import { takeLatest, put, all, select } from "redux-saga/effects";
import {
  leagueComplete,
  leagueDetailComplete,
  transferComplete,
  matchesLeagueComplete,
  statsLeagueComplete
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

export function* _leagueDetailSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/leagues', action.payload)
    yield put(leagueDetailComplete(res))
  } catch (e) {
    yield put(leagueDetailComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}

export function* _transfersLeagueSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/leagues', action.payload)
    yield put(transferComplete(res))
  } catch (e) {
    yield put(transferComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}

export function* _matchesLeagueSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/leagues', action.payload)
    yield put(matchesLeagueComplete(res))
  } catch (e) {
    yield put(matchesLeagueComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}

export function* _statsLeagueSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/leagues', action.payload)
    yield put(statsLeagueComplete(res))
  } catch (e) {
    yield put(statsLeagueComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}

