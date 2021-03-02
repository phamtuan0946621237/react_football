import { takeLatest, put, all, select } from "redux-saga/effects";
import {
  clubComplete,
  squadComplete,
  fixturesComplete,
  transferComplete
} from "../action/club";
import {fetchGet} from '../../connection'

// club
export function* _clubSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/teams', action.payload)
    yield put(clubComplete(res))
  } catch (e) {
    yield put(clubComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}

export function* _squadSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/teams', action.payload)
    yield put(squadComplete(res))
  } catch (e) {
    yield put(squadComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}

export function* _fixturesSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/teams', action.payload)
    yield put(fixturesComplete(res))
  } catch (e) {
    yield put(fixturesComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}

export function* _transfersSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/teams', action.payload)
    yield put(transferComplete(res))
  } catch (e) {
    yield put(transferComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}



