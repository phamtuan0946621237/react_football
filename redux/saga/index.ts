import { all, fork } from 'redux-saga/effects';
import * as Match from './match'

export default function* rootSaga() {
    yield all([
        ...Object.values(Match),
    ].map(fork));
}