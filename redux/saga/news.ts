import { takeLatest, put, all, select } from "redux-saga/effects";
import {
  newsComplete
} from "../action/news";
import {fetchGet,POST} from '../../connection'

// search

export function* _newsSaga(action: any) {

  try {
    let res = yield fetchGet('https://apigw.fotmob.com/searchapi/search', action.payload)
    yield put(newsComplete(res))
  } catch (e) {
    yield put(newsComplete({message: "Bạn vui lòng kiểm tra lại kết nối."}))
  }
}
