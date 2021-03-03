import { takeLatest, put, all, select } from "redux-saga/effects";
import {
  playerComplete
} from "../action/player";
import {fetchGet,POST} from '../../connection'

// search

export function* _playerSaga(action: any) {

  try {
    let res = yield fetchGet('https://www.fotmob.com/playerData', action.payload)
    yield put(playerComplete(res))
  } catch (e) {
    yield put(playerComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}
