import { takeLatest, put, all, select } from "redux-saga/effects";
import {
  searchComplete
} from "../action/search";
import {fetchGet,POST} from '../../connection'

// search

export function* _searchSaga(action: any) {

  try {
    let res = yield fetchGet('https://apigw.fotmob.com/searchapi/suggest', action.payload)
    yield put(searchComplete(res))
  } catch (e) {
    yield put(searchComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}
